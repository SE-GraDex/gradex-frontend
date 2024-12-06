import React, { useState } from 'react'
import cross from '../assets/images/cross.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (UpdateShipping: IShipping) => void
  trackNum: string
  name: string
  address: string
  contact: string
  status: 'Ongoing' | 'Delivered' | 'Returned' | 'Failed to Deliver'
}

interface IShipping {
  tracking_number: string
  customer_name: string
  address: string
  contact: string
  status: 'Ongoing' | 'Delivered' | 'Returned' | 'Failed to Deliver'
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, trackNum, name, address, contact, status }) => {
  const [statusChange, setStatusChange] = useState<IShipping['status']>('Ongoing')

  if (!isOpen) return null

  const handleSubmit = () => {
    if (!statusChange) return // Ensure a status is selected
    const updatedShipping: IShipping = {
      tracking_number: trackNum,
      customer_name: name,
      address: address,
      contact: contact,
      status: statusChange,
    }
    onSubmit(updatedShipping) // Pass the updated shipping data to parent
    onClose() // Close the modal after submission
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
            <div className="w-[200px] h-[70px] mb-8 ml-24 content-center">Tracking Number</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Customer Name</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Address</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Contact</div>
            <div className="w-[200px] h-[40px] mb-8 ml-24 content-center">Status</div>
          </div>
          <div className="text-[16px] font-medium text-topic mt-10">
            <div className="pl-7 mb-8 w-[300px] h-[70px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {trackNum}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {name}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {address}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              {contact}
            </div>
            <div className="mb-8 w-[300px] h-[40px] bg-white flex rounded-full justify-center items-center border border-[#47C171]">
              <select
                value={statusChange}
                onChange={(event) => setStatusChange(event.target.value as IShipping['status'])}
                className="w-[260px] h-[38px] bg-white rounded-full text-center flex justify-center focus:outline-none"
              >
                <option value="" hidden>
                  {status}
                </option>
                <option value="Delivered">Delivered</option>
                <option value="Returned">Returned</option>
                <option value="Failed to Deliver">Failed to Deliver</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className={`w-[175px] h-[48px] mb-5 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
