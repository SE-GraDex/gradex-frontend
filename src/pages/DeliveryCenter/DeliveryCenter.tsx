import { useState, useEffect } from 'react';
import ButtonLink from '../../components/button/ButtonLink';
import personlogo from '../../assets/images/person.svg';
import check from '../../assets/images/Check-square.svg';
import shippingTasksData from '../CompleteShip/ship_complete.json';

const Home = () => {
  const [userName, setUserName] = useState("Mr. xxx xxx");
  const [userRole, setUserRole] = useState("Senior Messenger");
  const [ongoingTasks, setOngoingTasks] = useState(0);
  const [completedShipments, setCompletedShipments] = useState(0);

  useEffect(() => {
    const ongoing = shippingTasksData.filter((task) => task.status === "");
    const completed = shippingTasksData.filter((task) => task.status !== "");

    setOngoingTasks(ongoing.length);
    setCompletedShipments(completed.length);
  }, []);

  return (
    <div className="bg-[#7BB3B5] min-h-screen">
      <div className="text-[40px] pt-10 text-white flex items-center justify-center">GraDex | Delivery Center</div>
      <div className="items-center flex justify-center px-15 mt-10">
        <div className="flex items-center justify-center">
          <img src={personlogo} alt="Logo" width="250" height="250" />
        </div>
        <div className="flex flex-col justify-center px-15 text-left">
          <div className="text-[40px] text-white">Welcome, {userName}</div>
          <div className="text-[32px] p-5 text-white">{userRole}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-24 px-24">
        <div className="bg-[#F1FCF1] p-10 rounded-3xl my-20 mx-24 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center mt-3 text-[32px] font-bold">Ongoing Task</div>
            <div className="flex items-center justify-center text-[20px] font-bold mt-10">( non-assign status )</div>
            <div className="text-[64px] text-center font-bold flex items-center justify-center mt-10">{ongoingTasks}</div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <ButtonLink
              label={'Check'}
              link={'/ongoing'}
              className="w-[130px] h-[50px] mb-5 text-[16px] font-medium bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center"
            />
          </div>
        </div>

        <div className="bg-[#F1FCF1] p-10 rounded-3xl my-20 mx-24 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center mt-3 text-[32px] font-bold">Complete Shipment</div>
            <div className="flex items-center justify-center mt-5">
              <div className="flex items-center justify-center text-[64px] font-bold mt-10">{completedShipments}</div>
              <div className="flex items-center justify-center mt-7 ml-4">
                <img src={check} alt="Logo" width="100" height="100" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <ButtonLink
              label={'Check'}
              link={'/complete'}
              className="w-[130px] h-[50px] mb-5 text-[16px] font-medium bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;