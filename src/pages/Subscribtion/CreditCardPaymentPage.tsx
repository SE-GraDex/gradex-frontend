import React, { useState } from "react";
import DropdownPackage from "./DropdownPackage";
import ModelPayment from "./ModelPayment";
import { useNavigate } from 'react-router-dom';

const CreditCardPaymentPage = () => {
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
            <div className="w-[1120px] h-[250px] bg-[#47C171] p-6 rounded-lg shadow-md justify-self-center">
                <form className="grid gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-[#066426] font-medium">Cardholder Name</label>
                            <input
                                type="text"
                                className="w-[301px] h-[52px] p-2 border border-gray-300 rounded-2xl"
                            />
                        </div>
                        <div>
                            <label className="block text-[#066426] font-medium">Card Number</label>
                            <input
                                type="text"
                                className="w-[226px] h-[52px] p-2 border border-gray-300 rounded-2xl"
                            />
                        </div>
                        <div>
                            <label className="block text-[#066426] font-medium">Your package</label>
                            <DropdownPackage onSubmit={handlePackageChange} />
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div>
                            <label className="block text-[#066426] font-medium">Expiration Date</label>
                            <input
                                type="text"
                                className="w-[142px] h-[52px] p-2 border border-gray-300 rounded-2xl"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label className="block text-[#066426] font-medium">CVV/CVC</label>
                            <input
                                type="text"
                                className="w-[142px] h-[52px] p-2 border border-gray-300 rounded-2xl"
                            />
                        </div>
                        <div>
                            <label className="block text-[#066426] font-medium">Phone Number</label>
                            <input
                                type="text"
                                className="w-[226px] h-[52px] p-2 border border-gray-300 rounded-2xl"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="w-[1120px] justify-self-center text-end mt-6">
                <div className="text-4xl font-bold">

                <span className="font-normal">Amount: </span>{selectedPackage === "Basic" ? 180 : selectedPackage === "Deluxe" ? 250 : 350} Bath
                </div>
                <div className="mt-6 flex space-x-4 justify-end">
                    <button className="border w-[126px] h-[48] border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-[#C6FFEA] transition-all duration-200" onClick={()=>setIsPopUpOpen(true)}>
                        Confirm
                    </button>
                    <button className="border w-[126px] h-[48] border-[#30E06C] hover:bg-[#30E06C] rounded-full px-4 py-3 hover:text-black bg-[#C6FFEA] transition-all text-[#066426] duration-200" onClick={goToAboutPage}>
                        Cancel
                    </button>
                </div>
                <div className="mt-4 text-sm text-[#066426]  text-end">
                    We'll remind you when the package is about to expire.
                </div>
            </div>
            {
                isPopUpOpen && <ModelPayment isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} menuType={selectedPackage} />
            }
        </div>
    );
};

export default CreditCardPaymentPage;
