import { useState } from 'react'
import shippingTasks from './ship_complete.json'
import Edit from '../../assets/images/Edit.svg'
import Modal from '../../components/ModalEditStatus'

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalTrackingNumber, setModalTrackingNumber] = useState<string>('')
  const [modalCustomerName, setModalCustomerName] = useState<string>('')
  const [modalAddress, setModalAddress] = useState<string>('')
  const [modalContact, setModalContact] = useState<string>('')

  const openModal = (trackingNumber: string, customerName: string, address: string, contact: string) => {
    setModalTrackingNumber(trackingNumber)
    setModalCustomerName(customerName)
    setModalAddress(address)
    setModalContact(contact)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const ongoingTasks = shippingTasks.filter((task) => task.status !== '')

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        trackNum={modalTrackingNumber}
        name={modalCustomerName}
        address={modalAddress}
        contact={modalContact}
      />
      <div className="bg-[#7BB3B5] min-h-screen z-0">
        <div className="text-[40px] pt-10 text-white flex items-center justify-center">Completed Shipments</div>

        <div className="flex justify-left mx-24 pt-10 px-14 my-5">
          <div className="w-[300px] h-[60px] ongoing-topic px-20 ml-14 mr-8">Tracking Number</div>
          <div className="w-[300px] h-[60px] ongoing-topic px-20 mr-4">Customer Name</div>
          <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-20 mr-20">Address</div>
          <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-8">Contact</div>
          <div className="w-[150px] h-[60px] ongoing-topic px-20 ml-6">Status</div>
        </div>
        <div className="mx-24 pt-3 px-10 my-5 overflow-auto h-[600px]">
          {ongoingTasks.map((task, index) => (
            <div key={index} className="flex">
              <div className="flex my-5 rounded-2xl bg-[#F1FCF1] ml-20 mr-8 items-center relative">
                <div className="h-[60px] w-[250px] text-[16px] font-medium flex items-center justify-center ml-4 mr-16">
                  {task.trackingNumber}
                </div>
                <div className="h-[60px] w-[300px] text-[16px] font-medium flex items-center justify-center">
                  {task.customerName}
                </div>
                <div className="h-[60px] w-[400px] text-[16px] font-medium flex items-center justify-center">
                  {task.address}
                </div>
                <div className="h-[60px] w-[200px] text-[16px] font-medium flex items-center justify-center">
                  {task.contact}
                </div>
                <div className="h-[60px] w-[200px] text-[16px] font-medium flex items-center justify-center">
                  {task.status}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={Edit}
                  alt="Edit"
                  width="24"
                  height="24"
                  onClick={() =>
                    openModal(task.trackingNumber, task.customerName, task.address, task.contact)
                  }
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
