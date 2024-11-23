import { useEffect, useState } from 'react';
import check from '../assets/images/Check.svg'
import axios from 'axios'
import Modal from '../components/ModelSub'
import crownlogo from '../assets/images/crown-logo.svg'
import diamondlogo from '../assets/images/diamond-logo.svg'
import ricelogo from '../assets/images/rice-logo.svg'

interface IPackage {
  user_id: string;
  package_name: 'Basic' | 'Deluxe' | 'Premium';
  price: number;
  features: string;
  package_start_date: Date;
  package_end_date: Date;
}

const Home = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>('')
  const [modalLogo, setModalLogo] = useState<string>('')
  const closeModal = () => setModalOpen(false)

  const openModal = (type: string, logo: string) => {
    setModalType(type)
    setModalLogo(logo)
    setModalOpen(true)
  }

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/package/getAllPackages');
        setPackages(response.data);
      } catch (error) {
        console.error('Failed to fetch packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        type={modalType}
        logo={modalLogo}
      />
      <div className="mt-10 text-center">
        <div className="justify-self-center text-[48px] text-topic font-bold">Subscription</div>
        <div className="justify-self-center text-[20px] text-topic font-bold">
          Choose between Our Basic Package , Deluxe Package ,and Premium Package
        </div>
      </div>
      <div className="justify-center flex">
        <div className='mt-16 w-[480px] h-[400px] bg-[#F1FCF1] rounded-l-3xl'>
          <div className="justify-self-center text-center text-[24px] font-medium my-2">ค่าใช้จ่ายรายเดือน</div>
          <div className="justify-self-center text-center text-[24px] font-medium my-2">รายการอาหารให้เลือก xx เมนู</div>
          <div className="justify-self-center text-center text-[24px] font-medium my-2">รายการอาหารให้เลือก xxx เมนู</div>
          <div className="justify-self-center text-center text-[24px] font-medium my-2">ปลดล็อกเมนูอาหารทั้งหมด</div>
        </div>
        <div className="grid-cols-3 flex mt-6">
          <div className='bg-[#7BB3B5] w-[125px] h-[440px] rounded-tl-3xl flex flex-col items-center'>
            <div className='justify-self-center text-center text-[24px] text-white font-bold mt-2'>{packages.length > 0 && packages[0].package_name}</div>
            <div className='justify-self-center text-center text-[20px] font-medium my-2 text-white'>{packages.length > 0 && packages[0].price} Bath</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-6'/>
            <div className='justify-self-center text-[20px] font-medium my-3 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className='justify-self-center text-[20px] font-medium my-3 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className="flex items-center justify-center mt-44">
              <button
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
                onClick={() =>
                  openModal(
                    packages[0].package_name,
                    ricelogo
                  )
                }
              >
                Buy {packages.length > 0 && packages[0].package_name}
              </button>
            </div>
          </div>
          <div className='bg-[#5E8D97] w-[125px] h-[440px] flex flex-col items-center'>
            <div className='justify-self-center text-center text-[24px] text-white font-bold mt-2'>{packages.length > 0 && packages[1].package_name}</div>
            <div className='justify-self-center text-center text-[20px] font-medium my-2 text-white'>{packages.length > 0 && packages[1].price} Bath</div>
            <div className='justify-self-center text-[20px] font-medium my-3 text-white w-[20px] h-[20px] text-center'>-</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-6'/>
            <div className='justify-self-center text-[20px] font-medium my-3 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className="flex items-center justify-center mt-44">
            <button
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
                onClick={() =>
                  openModal(
                    packages[1].package_name,
                    diamondlogo
                  )
                }
              >
                Buy {packages.length > 0 && packages[1].package_name}
              </button>
            </div>
          </div>
          <div className='bg-[#456A78] w-[125px] h-[440px] rounded-r-3xl flex flex-col items-center'>
            <div className='justify-self-center text-center text-[24px] text-[#F4D294] font-bold mt-2'>{packages.length > 0 && packages[2].package_name}</div>
            <div className='justify-self-center text-center text-[20px] font-medium my-2 text-white'>{packages.length > 0 && packages[2].price}  Bath</div>
            <div className='justify-self-center text-[20px] font-medium my-2 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className='justify-self-center text-[20px] font-medium my-3 text-white w-[20px] h-[20px] text-center'>-</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-6 mb-2'/>
            <div className="flex items-center justify-center mt-44">
            <button
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
                onClick={() =>
                  openModal(
                    packages[2].package_name,
                    crownlogo
                  )
                }
              >
                Buy {packages.length > 0 && packages[2].package_name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
