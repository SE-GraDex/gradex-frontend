import { useState, useEffect } from 'react';
import search from '../../assets/images/Search.svg';
import Food from './Food'; // Ensure correct path

const Home = () => {
  const [food, setFood] = useState(Food);

  useEffect(() => {
    setFood(Food); // Updates state (though redundant in this example)
  }, []);

  return (
    <div>
      <div className="text-topic text-[64px] font-bold ml-80 mt-16">Recipe Book</div>
      <div className="flex mt-6 ml-80">
        <input
          type="text"
          id="last_name"
          className="bg-white w-[280px] border border-[#30E06C] text-gray-900 text-[20px] rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder="Search menu"
          required
        />
        <div className="bg-[#30E06C] w-[95px] rounded-r-full flex justify-center items-center">
          <button>
            <img src={search} alt="search" width="25" height="25" />
          </button>
        </div>
      </div>
      <div className="mx-80 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto mt-5">
          {food.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center mt-3">
                <img src={item.image} alt={item.name} width="145" height="145" />
              </div>
              <div className="flex items-center justify-center text-[25px] font-bold text-topic mt-3">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
