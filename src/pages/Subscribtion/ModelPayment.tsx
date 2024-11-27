import React from 'react';
import { packageItems } from '../../interface/global.types';
import { useNavigate } from 'react-router-dom';
import { packageDetail } from '../../interface/global.types';
import axios from 'axios';
interface ModalViewMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuType: 'Basic' | 'Deluxe' | 'Premium';
}


const ModelPayment: React.FC<ModalViewMenuProps> = ({ isOpen, onClose, menuType }) => {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        const index = packageDetail.findIndex((item) => item.package_name === menuType)

        axios.post('http://localhost:8080/api/user/addUserPackage', {
            package_name: packageDetail[index].package_name,
            price: packageDetail[index].price,
            features: packageDetail[index].features,
            package_start_date: packageDetail[index].package_start_date.toISOString()
        }, {
            withCredentials: true,
        }).then((response) => {
            console.log(response);
            navigate('/'); // นำทางไปยัง '/about'
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-[#1E1E1E] bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-[#F1FCF1] p-6 rounded-3xl shadow-lg w-[780px] h-[582px] relative">
                <div className=' justify-self-center text-[#386C5F] text-center'>
                    <div className='text-3xl font-bold mb-10'>
                        Payment completed
                    </div>
                    <div className='text-xl font-bold'>
                        You have been subscribed.
                    </div>
                    <img className='w-[200px] h-[200px] justify-self-center' src={packageItems[menuType]} alt="" />
                    <div className='text-2xl font-bold mb-4'>
                        {menuType}
                    </div>
                    <button className="border w-[126px] h-[48] border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-white transition-all duration-200"
                        onClick={goToAboutPage}>
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelPayment;