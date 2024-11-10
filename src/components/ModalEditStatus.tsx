import ButtonLink from './button/ButtonLink'
import React, { useState } from 'react'
import cross from '../assets/images/cross.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  trackNum: string
  name: string
  address: string
  contact: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, trackNum, name, address, contact }) => {
  const [status, setStatus] = useState('')

  if (!isOpen) return null

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10 text-topic">
      <div className="relative bg-[#F1FCF1] p-6 rounded-3xl shadow-lg w-[750px] h-[600px]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <img src={cross} alt="cross" width="24" height="24" />
        </button>
        <div className="flex justify-center items-center mt-8">
          <div className="text-[32px] font-medium">Update Status</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mr-10">
          <div className="text-[16px] font-medium text-topic mt-10">
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Tracking Number</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Customer Name</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Address</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Contact</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Status</div>
          </div>
          <div className="text-[16px] font-medium text-topic mt-10">
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {trackNum}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">{name}</div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {address}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {contact}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              <select
                value={status}
                onChange={handleStatusChange}
                className="w-[260px] h-[38px] bg-white rounded-full text-center flex justify-center"
              >
                <option value="" hidden>{status}</option>
                <option value="Delivered">Delivered</option>
                <option value="In Transit">Failed to Deliver</option>
                <option value="Pending">Returned</option>
              </select>
            </div>
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
