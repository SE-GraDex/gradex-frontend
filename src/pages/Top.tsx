import { useState } from 'react'
import crownlogo from '../assets/images/crown-logo.svg'
import diamondlogo from '../assets/images/diamond-logo.svg'
import premiumfood from '../assets/images/premium-food.svg'
import ricelogo from '../assets/images/rice-logo.svg'
import Modal from '../components/ModalMeal'

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<string>('')
  const [modalType, setModalType] = useState<string>('')
  const [modalLogo, setModalLogo] = useState<string>('')
  const [modalFood, setModalFood] = useState<string>('')

  const openModal = (content: string, type: string, logo: string, food: string) => {
    setModalContent(content)
    setModalType(type)
    setModalLogo(logo)
    setModalFood(food)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  return (
    <div className="mx-4 md:mx-40 lg:mx-40">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
        type={modalType}
        logo={modalLogo}
        food={modalFood}
      />
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Basic Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={ricelogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Basic',
                    ricelogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={ricelogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Basic',
                    ricelogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={ricelogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Basic',
                    ricelogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
        </div>
      </div>

      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Deluxe Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={diamondlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Deluxe',
                    diamondlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={diamondlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Deluxe',
                    diamondlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={diamondlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Deluxe',
                    diamondlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
        </div>
      </div>

      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Premium Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={crownlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Premium',
                    crownlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={crownlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Premium',
                    crownlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-center">
              <img src={crownlogo} alt="Logo" width="24" height="24" />
            </div>
            <div className="flex items-center justify-center mt-5">
              <img
                src={premiumfood}
                alt="Logo"
                width="100"
                height="100"
                onClick={() =>
                  openModal(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
                    'Premium',
                    crownlogo,
                    'Salmon steak'
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="top-food">Salmon Steak</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
