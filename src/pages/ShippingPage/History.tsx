import { useState } from 'react';

const Home = () => {
  const orders = [
    { month: 'November', status: 'In coming' },
    { month: 'October', status: 'Completed' },
    { month: 'September', status: 'Completed' },
  ];

  const getStatusStyles = (status:string) => {
    if (status === 'Completed') {
      return 'bg-[#30E06C] text-black';
    } else if (status === 'In coming') {
      return 'bg-black text-white';
    }
    return '';
  };

  return (
    <div className="flex items-center justify-center my-16">
      <div className="w-[1120px] h-[675px] bg-white rounded-3xl">
        <div className="text-[64px] font-bold text-topic ml-20 mt-6">Shipping History</div>
        {orders.map((order, index) => (
          <div key={index} className="flex items-center ml-44 mt-8">
            <div className="w-[518px] h-[110px] bg-[#7BB3B5] flex items-center justify-center text-white font-bold text-[32px] rounded-3xl hover:cursor-pointer">
              {order.month} Order
            </div>
            <div
              className={`w-[143px] h-[63px] rounded-full flex items-center justify-center font-medium text-[16px] ml-20 ${getStatusStyles(
                order.status
              )}`}
            >
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
