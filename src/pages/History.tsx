import { Link } from 'react-router-dom';

const Home = () => {
  const orders = [
    { month: 'November', status: 'In coming' },
    { month: 'October', status: 'Completed' },
    { month: 'September', status: 'Completed' },
    { month: 'August', status: 'Completed' },
    { month: 'July', status: 'Completed' },
    { month: 'June', status: 'Completed' },
    // Add more items to test vertical scrolling
  ];

  return (
    <div className="flex items-center justify-center my-16">
      <div className="w-[1120px] h-[675px] bg-white rounded-3xl">
        <div className="text-[64px] font-bold text-topic ml-20 mt-6">Shipping History</div>
        <div className="overflow-y-auto mt-8 h-[500px] justify-center">
          <div className="flex flex-col space-y-8 mt-2 justify-center">
            {orders.map((order, index) => (
              <div key={index} className="flex justify-center">
                <Link to={`/orders/${order.month}`} className="w-[518px] h-[110px] flex">
                  <div className="w-full h-full bg-[#7BB3B5] flex items-center justify-center text-white font-bold text-[32px] rounded-3xl transition-transform hover:scale-105 cursor-pointer">
                    {order.month} Order
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
