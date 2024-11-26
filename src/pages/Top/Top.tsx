import { useEffect, useState } from 'react'
import axios from 'axios'
import crownlogo from '../../assets/images/crown-logo.svg'
import diamondlogo from '../../assets/images/diamond-logo.svg'
import premiumfood from '../../assets/images/premium-food.svg'
import basicfood from '../../assets/images/basic-food.svg'
import deluxefood from '../../assets/images/deluxe-food.svg'
import ricelogo from '../../assets/images/rice-logo.svg'
import Modal from '../../components/ModalMeal'

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<string>('')
  const [modalType, setModalType] = useState<string>('')
  const [modalLogo, setModalLogo] = useState<string>('')
  const [modalFood, setModalFood] = useState<string>('')
  const [modalFoodLogo, setModalFoodLogo] = useState<string>('')
  const [packages, setPackages] = useState([])
  const openModal = (content: string, type: string, logo: string, food: string, foodLogo: string) => {
    setModalContent(content)
    setModalType(type)
    setModalLogo(logo)
    setModalFood(food)
    setModalOpen(true)
    setModalFoodLogo(foodLogo)
  }

  const closeModal = () => setModalOpen(false)

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/menu/getMenus')
        setPackages(response.data)
      } catch (error) {
        console.error('Failed to fetch packages:', error)
      }
    }

    fetchPackages();
  }, [])

  const basicMenus = [
    { food: 'Pad Thai', logo: ricelogo, image: basicfood },
    { food: 'Fried Rice', logo: ricelogo, image: basicfood },
    { food: 'Green Curry', logo: ricelogo, image: basicfood },
  ]

  const deluxeMenus = [
    { food: 'Tom Yum Kung', logo: diamondlogo, image: deluxefood },
    { food: 'Spicy Basil', logo: diamondlogo, image: deluxefood },
    { food: 'Massaman Curry', logo: diamondlogo, image: deluxefood },
  ]

  const premiumMenus = [
    { food: 'Salmon Steak', logo: crownlogo, image: premiumfood },
    { food: 'Wagyu Beef', logo: crownlogo, image: premiumfood },
    { food: 'Lobster', logo: crownlogo, image: premiumfood },
  ]

  
  packages.forEach((element: any) => {
    if (element.package === 'Basic') {
      basicMenus.push({ food: element.menu_name, logo: ricelogo, image: basicfood })
    } else if (element.package === 'Deluxe') {
      deluxeMenus.push({ food: element.menu_name, logo: diamondlogo, image: deluxefood })
    } else if (element.package === 'Premium') {
      console.log('Element:', element);
      premiumMenus.push({ food: element.menu_title, logo: crownlogo, image: element.menu_image })
    }
  });

  const renderMenu = (menus: { food: string; logo: string; image: string }[], type: string) =>
    menus.map((menu, index) => (
      <div className="p-4" key={index}>
        <div className="w-[400px]">
          <div className="flex items-center justify-center">
            <img src={menu.logo} alt="Logo" width="24" height="24" />
          </div>
          <div className="flex items-center justify-center mt-5 ">
            <img
              src={menu.image}
              alt={menu.food}
              width="100"
              height="100"
              onClick={() =>
                openModal(
                  (menu.food) ?menu.food : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  type,
                  menu.logo,
                  menu.food,
                  menu.image
                )
              }
              className="cursor-pointer overflow-hidden rounded-full"
            />
          </div>
          <div className="top-food">{menu.food}</div>
        </div>
      </div>
    ))

  return (
    <div className="mx-4 md:mx-40 lg:mx-40">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
        type={modalType}
        logo={modalLogo}
        food={modalFood}
        logofood={modalFoodLogo}
      />

      {/* Basic Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Basic Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(basicMenus, 'Basic')}
        </div>
      </div>

      {/* Deluxe Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Deluxe Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(deluxeMenus, 'Deluxe')}
        </div>
      </div>

      {/* Premium Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Premium Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(premiumMenus, 'Premium')}
        </div>
      </div>
    </div>
  )
}

export default Home
