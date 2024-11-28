import { useLocation } from 'react-router-dom';
import React from 'react';

interface DailyOrderList {
  menu_image: string;
  menu_title: string;
  date: string;
  tracking_number: string;
}

interface Shipping {
  tracking_number: string;
  status: 'Ongoing' | 'Delivered' | 'Returned' | 'Failed to Deliver';
}

const ShippingSelectMonth: React.FC = () => {
  const location = useLocation();
  const { month, orders, shippings } = location.state || {};
  
  const filteredOrders = orders.filter((order: DailyOrderList) => {
    const orderDate = new Date(order.date);
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(orderDate) === month;
  }).map((order: DailyOrderList) => {
    const shippingStatus = shippings.find(
      (shipping: Shipping) => shipping.tracking_number === order.tracking_number
    )?.status || 'In coming';
    return { ...order, status: shippingStatus };
  });

  return (
    <div className="p-8">
      <div className="text-[64px] font-bold text-topic mb-4">{month} History</div>
      <div className='flex flex-row flex-wrap gap-10'>
        {filteredOrders.map((order: any, index: number) => (
          <div key={index} className="flex flex-col items-center mb-4 p-4 gap-8">
            <img src={order.menu_image} alt={order.menu_title} className="w-[143px] h-[143px] rounded-full mr-4" />
            <div className="flex flex-col items-center gap-4">
              <div className="font-bold text-lg text-[#386C5F] align-center">{order.menu_title}</div>
              <div className="text-md text-[#386C5F] align-center">{new Date(order.date).toLocaleDateString()}</div>
            </div>
            <div className={`px-4 py-2 rounded-full ${getStatusStyles(order.status)}`}>
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatusStyles = (status: string) => {
  if (status === 'Delivered') return 'bg-green-500 text-white';
  if (status === 'Ongoing') return 'bg-blue-500 text-white';
  if (status === 'Returned') return 'bg-yellow-500 text-black';
  if (status === 'Failed to Deliver') return 'bg-red-500 text-white';
  return 'bg-gray-500 text-white';
};

export default ShippingSelectMonth;
