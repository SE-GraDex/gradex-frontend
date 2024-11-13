import premiumfood from '../assets/images/premium-food.svg'
import ButtonLink from './button/ButtonLink'
import cross from '../assets/images/cross.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  content: string
  type: string
  logo: string
  food: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, type, logo, food }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-3xl shadow-lg w-[760px] h-[590px]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <img
                src={cross}
                alt="cross"
                width="24"
                height="24"
              />
        </button>
        <div className="flex items-center justify-center">
          <img src={premiumfood} alt="Logo" width="250" height="250" className="mt-3" />
        </div>
        <div className="flex items-center justify-center mt-1">
          <img src={logo} alt="Logo" width="24" height="24" />
          <div className="ml-2 font-bold text-[25px] text-topic">{type}</div>
        </div>
        <div className="ml-2 font-bold text-[25px] text-topic flex items-center justify-center mt-3">{food}</div>
        <div className="justify-self-center mt-3 px-24 mx-10">
          <div className="text-topic text-center font-medium">{content}</div>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLink
            label={'Recipe Book'}
            link={''}
            className={`w-[175px] h-[48px] mb-5 mt-7 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center`}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
