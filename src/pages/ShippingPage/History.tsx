import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface DailyOrderList {
  menu_image: string;
  menu_title: string;
  date: Date;
  tracking_number: string;
}

interface Shipping {
  tracking_number: string;
  status: 'Ongoing' | 'Delivered' | 'Returned' | 'Failed to Deliver';
}

interface ShippingStatus {
  menu_image: string;
  menu_title: string;
  date: string;
  status: 'Ongoing' | 'Delivered' | 'Returned' | 'Failed to Deliver';
}

const History = () => {
  const navigate = useNavigate();
  const [dailyOrders, setDailyOrders] = useState<DailyOrderList[]>([]);
  const [shippings, setShippings] = useState<Shipping[]>([]);
  const [monthlyOrders, setMonthlyOrders] = useState<{ month: string; status: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch daily order and shipping data concurrently
        const [dailyOrderRes, shippingRes] = await Promise.all([
          axios.get('http://localhost:8080/api/dailyorderlist/getAllOrders'),
          axios.get('http://localhost:8080/api/shipping/getAllShippings'),
        ]);



        const dailyOrderData: DailyOrderList[] = dailyOrderRes.data.data.map((item: any) => ({
          menu_image: item.menu_image,
          menu_title: item.menu_title,
          date: item.date,
          tracking_number: item.tracking_number,
        }));

        const shippingData: Shipping[] = shippingRes.data.map((item: any) => ({
          tracking_number: item.tracking_number,
          status: item.status,
        }));

        // console.log(dailyOrderData);
        console.log(shippingData);

        // Map data to monthly order status
        const orderMap: { [month: string]: string } = {};
        const monthStatuses: { [month: string]: Set<string> } = {};



        dailyOrderData.forEach((order: DailyOrderList) => {
          // console.log("here", order);
          const orderDate = new Date(order.date);
          const month = monthNames[orderDate.getMonth()];
          const shippingStatus = shippingData.find(
            (shipping: Shipping) => shipping.tracking_number === order.tracking_number
          )?.status || '';

          if (!monthStatuses[month]) {
            monthStatuses[month] = new Set();
          }
          monthStatuses[month].add(shippingStatus);
        });

        Object.entries(monthStatuses).forEach(([month, statuses]) => {
          console.log("Hererererer", statuses);
          if (statuses.has('Ongoing')) {
            orderMap[month] = 'In coming';
          } else {
            orderMap[month] = 'Completed';
          }
        });
        // console.log('monthStatuses:', monthStatuses);
        // console.log('orderMap:', orderMap);


        const monthlyOrdersArray = Object.entries(orderMap).map(([month, status]) => ({ month, status }));
        // Set all processed data to state
        setDailyOrders(dailyOrderData);
        setShippings(shippingData);
        setMonthlyOrders(monthlyOrdersArray);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  // if(isLoading) {
  //   return <div>Loading...</div>
  // }

  const getStatusStyles = (status: string) => {
    if (status === 'Completed') {
      return 'bg-[#30E06C] text-black';
    } else if (status === 'In coming') {
      return 'bg-black text-white';
    }
    return '';
  };

  const handleClick = (element: string) => {
    navigate('/shippingselectmonth', { state: { month: element, orders: dailyOrders, shippings } });
  };

  return (
    <div className="flex items-center justify-center my-16">
      <div className="w-[1120px] h-[675px] bg-white rounded-3xl">
        <div className="text-[64px] font-bold text-topic ml-20 mt-6 mb-8">Shipping History</div>
        <div className='flex flex-col gap-4'>
          {monthlyOrders.map((order, index) => (
            <div key={index} className="flex items-center ml-44">
              <div
                className="w-[518px] h-[110px] bg-[#7BB3B5] flex items-center justify-center text-white font-bold text-[32px] rounded-3xl hover:cursor-pointer "
                onClick={() => handleClick(order.month)}
              >
                {order.month} Order
              </div>
              <div
                className={`w-[143px] h-[63px] rounded-full flex items-center justify-center font-medium text-[16px] ml-20 ${getStatusStyles(order.status)}`}
              >
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
