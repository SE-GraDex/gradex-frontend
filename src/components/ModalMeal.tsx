import cross from '../assets/images/cross.svg'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  content: string
  type: string
  logo: string
  food: string
  logofood?: string
}

interface IMenu {
  menu_title: string
  menu_description: string
  ingredient_list: IIngredient[]
  package: 'Basic' | 'Deluxe' | 'Premium'
  menu_image: string
}

interface IIngredient {
  name: string
  portion: number
  pricePerUnit: number
  unit: string
}



const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, type, logo, food, logofood }) => {
  if (!isOpen) return null;
  const [selectMenu, setSelectMenu] = useState<IMenu | null>(null);
  
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchTopMenus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dailyorderlist/getTopThreeOrders');
        console.log(response.data);
        const selectedMenu = response.data.menus.find((menu: any) => menu.menu_title === food);
        if (selectedMenu) {
          const temp: IMenu = {
            menu_title: selectedMenu.menu_title,
            menu_description: selectedMenu.menu_description,
            ingredient_list: selectedMenu.ingredient_list,
            package: selectedMenu.package,
            menu_image: selectedMenu.menu_image,
          };
          setSelectMenu(temp);
          // console.log(temp);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchTopMenus();
  }, [food])

  const handleClick = (item: IMenu) => {
    console.log(item);
    navigate('/recipe-food', { state: item })
  }
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-3xl shadow-lg w-[760px] h-[800px] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <img src={cross} alt="cross" width="24" height="24" />
        </button>
        <div className="flex items-center justify-center">
          <img src={logofood} alt="Logo" width="250" height="250" className="mt-3 rounded-full w-[250px] h-[250px] object-cover" />
        </div>
        <div className="flex items-center justify-center mt-1">
          <img src={logo} alt="Logo" width="24" height="24" />
          <div className="ml-2 font-bold text-[25px] text-topic">{type}</div>
        </div>
        <div className="ml-2 font-bold text-[25px] text-topic flex items-center justify-center mt-3">{food}</div>
        <div
          className="justify-self-center mt-3 px-6 mx-10 overflow-y-auto custom-scrollbar flex-grow"
          style={{ maxHeight: '300px' }}
        >
          <div className="text-topic text-center font-medium">{content}</div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div
            className={`w-[175px] h-[48px] mb-5 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center cursor-pointer`}
            onClick={() => handleClick(selectMenu as IMenu)}
          >
            Recipe Book
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
