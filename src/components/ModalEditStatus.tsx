import premiumfood from '../assets/images/premium-food.svg'
import ButtonLink from './button/ButtonLink'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  trackNum: string
  name: string
  address: string
  contact: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, trackNum, name, address, contact }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10 text-topic">
      <div className="relative bg-[#F1FCF1] p-6 rounded-3xl shadow-lg w-[750px] h-[600px]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center items-center mt-8">
          <div className="text-[32px] font-medium">Update Status</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mr-10">
          <div className="text-[16px] font-medium text-topic mt-10">
            <div className='w-[200px] h-[40px] mb-8 ml-24 content-center'>Tracking Number</div>
            <div className='w-[200px] h-[40px] mb-8 ml-24 content-center'>Customer Name</div>
            <div className='w-[200px] h-[40px] mb-8 ml-24 content-center'>Address</div>
            <div className='w-[200px] h-[40px] mb-8 ml-24 content-center'>Contect</div>
            <div className='w-[200px] h-[40px] mb-8 ml-24 content-center'>Status</div>
          </div>
          <div className="text-[16px] font-medium text-topic mt-10">
            <div className='mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center'>{trackNum}</div>
            <div className='mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center'>{name}</div>
            <div className='mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center'>{address}</div>
            <div className='mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center'>{contact}</div>
            <div className='mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center'>XXXX</div>
          </div>
        </div>
          <div className="flex items-center justify-center">
          <ButtonLink
            label={'Submit'}
            link={''}
            className={`w-[175px] h-[48px] mb-5 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center`}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
