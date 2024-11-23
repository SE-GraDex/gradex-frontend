import React, { useState } from 'react';
import qrscan from '../../assets/images/bx-qr-scan.svg'
import credit from '../../assets/images/bxs-credit-card.svg'
import CreditCardPaymentPage from './CreditCardPaymentPage';
import QRCodePaymentPage from './QRCodePaymentPage';
const AllPaymentPage: React.FC = () => {
    const [showCreditCardPayment, setShowCreditCardPayment] = useState(false);
    const [showQRCodePayment, setShowQRCodePayment] = useState(false);
    return (
        <div className=''>
            <div className='w-[1120px] h-[170px] justify-self-center mb-10'>
                <div className='text-5xl font-bold text-[#386C5F] mt-10'>
                    Payment
                </div>
                <div className='text-2xl text-[#386C5F] mt-3'>
                    Payment methods
                </div>
                <div className='flex gap-10 mt-4'>
                    <div>
                        <div className='flex gap-10'>
                            <div className={showCreditCardPayment ? 'bg-[#30E06C] w-[120px] h-[80px] rounded-xl flex items-center justify-center' : 'w-[120px] h-[80px] flex items-center justify-center hover:cursor-pointer'} onClick={() => { setShowCreditCardPayment(!showCreditCardPayment); setShowQRCodePayment(false); }}>
                                <img src={credit} alt="credit" />
                            </div>
                            <div className={showQRCodePayment ? 'bg-[#30E06C] w-[120px] h-[80px] rounded-xl flex items-center justify-center' : 'w-[120px] h-[80px] flex items-center justify-center hover:cursor-pointer'} onClick={() => { setShowQRCodePayment(!showQRCodePayment); setShowCreditCardPayment(false); }}>
                                <img src={qrscan} alt="qrscan" />
                            </div>
                        </div>
                        {showQRCodePayment && (
                            <>
                                <div className='text-[#386C5F] text-xl'>
                                    Scan to Pay
                                </div>
                                <div className='text-[#386C5F]'>
                                    Use your mobile banking app to scan <br />
                                    and complete the payment.
                                </div>
                            </>
                        )}
                    </div>
                    {showQRCodePayment && <QRCodePaymentPage />}
                </div>
            </div>
            {showCreditCardPayment && <CreditCardPaymentPage />}
        </div>
    );
};

export default AllPaymentPage;