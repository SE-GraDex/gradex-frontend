import { useState } from 'react'
import ButtonLink from '../components/button/ButtonLink'
import Edit from '../assets/images/Edit.svg'
import Modal from '../components/ModalEditStatus'

const Home: React.FC = () => {
  //Example
  const shippingTasks = [
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    {
      trackingNumber: '56E3RT',
      customerName: 'Jaatupoj Tuangsintaweekul',
      address: '201 moo8 Cosmo Mansion',
      contact: 'gram',
    },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
    { trackingNumber: '56E3RT', customerName: 'Somsak Kiddee', address: '201 moo8 Cosmo Mansion', contact: 'gram' },
  ]

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalContent, setModalTrack] = useState<string>('')
  const [modalType, setModalName] = useState<string>('')
  const [modalLogo, setModalAddress] = useState<string>('')
  const [modalFood, setModalContact] = useState<string>('')

  const openModal = (trackNum: string, name: string, address: string, contact: string) => {
    setModalTrack(trackNum)
    setModalName(name)
    setModalAddress(address)
    setModalContact(contact)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        trackNum={modalContent}
        name={modalType}
        address={modalLogo}
        contact={modalFood}
      />
      <div className="bg-[#7BB3B5] min-h-screen z-0">
        <div className="text-[40px] pt-10 text-white flex items-center justify-center">Ongoing Shipping Task</div>

        <div className="flex justify-left mx-24 pt-10 px-14 my-5">
          <div className="w-[300px] h-[60px] ongoing-topic px-20 ml-14 mr-8">Tracking Number</div>
          <div className="w-[300px] h-[60px] ongoing-topic px-20 mr-4">Customer Name</div>
          <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-20 mr-20">Address</div>
          <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-8">Contact</div>
        </div>

        <div className="mx-24 pt-3 px-10 my-5 overflow-auto h-[600px]">
          {shippingTasks.map((task, index) => (
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
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={Edit}
                  alt="Edit"
                  width="24"
                  height="24"
                  onClick={() => openModal(task.trackingNumber, task.customerName, task.address, task.contact)}
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

// import { useState, useEffect } from 'react';
// import ButtonLink from '../components/button/ButtonLink';
// import Edit from '../assets/images/Edit.svg';

// const Home = () => {
//   const [shippingTasks, setShippingTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/api/shippingTasks');
//         const data = await response.json();
//         setShippingTasks(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   return (
//     <div className="bg-[#7BB3B5] min-h-screen">
//       <div className="text-[40px] pt-10 text-white flex items-center justify-center">Ongoing Shipping Task</div>

//       <div className="flex justify-left mx-24 pt-10 px-14 my-5">
//         <div className="w-[300px] h-[60px] ongoing-topic px-20 ml-14 mr-8">Tracking Number</div>
//         <div className="w-[300px] h-[60px] ongoing-topic px-20 mr-4">Customer Name</div>
//         <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-20 mr-20">Address</div>
//         <div className="w-[200px] h-[60px] ongoing-topic px-20 ml-8">Contact</div>
//       </div>

//       <div className="mx-24 pt-10 px-10 my-5 overflow-auto h-[600px]">
//         {shippingTasks.map((task, index) => (
//           <div key={index} className="flex">
//             <div className="flex my-5 rounded-2xl bg-[#F1FCF1] ml-20 mr-8 items-center relative">
//               <div className="h-[60px] w-[250px] text-[16px] font-medium flex items-center justify-center ml-4 mr-16">
//                 {task.trackingNumber}
//               </div>
//               <div className="h-[60px] w-[300px] text-[16px] font-medium flex items-center justify-center">
//                 {task.customerName}
//               </div>
//               <div className="h-[60px] w-[400px] text-[16px] font-medium flex items-center justify-center">
//                 {task.address}
//               </div>
//               <div className="h-[60px] w-[200px] text-[16px] font-medium flex items-center justify-center">
//                 {task.contact}
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img src={Edit} alt="Edit" width="24" height="24" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
