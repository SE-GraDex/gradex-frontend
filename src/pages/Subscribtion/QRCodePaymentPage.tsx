import React from 'react';
import { useState } from 'react';
import Paymentqrcode from '../../assets/images/Paymentqrcode.svg'
import DropdownPackage from './DropdownPackage';
import { useNavigate } from 'react-router-dom';
import ModelPayment from './ModelPayment';
const QRCodePaymentPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedPackage, setSelectedPackage] = useState<'Basic' | 'Deluxe' | 'Premium'>("Basic");
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const handlePackageChange = (selectedPackage: 'Basic' | 'Deluxe' | 'Premium') => {
        setSelectedPackage(selectedPackage);
    };
    const goToAboutPage = () => {
        navigate('/subscription'); // นำทางไปยัง '/about'
    };
    return (
        <div>
            <div className='w-[729px] h-[402px] bg-[#47C171] rounded-xl'>
                <div className='flex'>
                    <div className='m-5'>
                        <img src={Paymentqrcode} alt="Paymentqrcode" onClick={() => setIsPopUpOpen(true)} className='hover:cursor-pointer' />
                        <div className="text-4xl font-bold text-white mt-3 w-[345px]">

                            <span className="font-normal">Amount: </span>{selectedPackage === "Basic" ? 180 : selectedPackage === "Deluxe" ? 250 : 350} Bath
                        </div>
                    </div>
                    <div className='flex flex-col m-20'>
                        <label className="block text-[#066426] font-medium">Your package</label>
                        <DropdownPackage onSubmit={handlePackageChange} />
                    </div>
                </div>
            </div>
            <div className='w-[729px] mt-10 flex justify-end'>
                <button className="border w-[126px] h-[48px] border-[#30E06C] hover:bg-[#30E06C] rounded-full px-4 py-3 hover:text-black bg-[#C6FFEA] transition-all text-[#066426] duration-200 " onClick={goToAboutPage}>
                    Cancel
                </button>
            </div>
            <div className='w-[729px]'>
                <div className="mt-4 text-sm text-[#066426]  text-end">
                    We'll remind you when the package is about to expire.
                </div>
            </div>
            {isPopUpOpen && <ModelPayment isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} menuType={selectedPackage} />}
        </div>
    );
};

export default QRCodePaymentPage;