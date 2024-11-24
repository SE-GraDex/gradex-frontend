import { useLocation } from 'react-router-dom';
import { MenuItem } from '../../interface/global.types';
import line from '../../assets/images/Line 2.svg';
import ricelogo from '../../assets/images/rice-logo.svg';
import video from '../../assets/images/video.svg';

const RecipeFood = () => {
  const location = useLocation();

  const selectedFood = location.state as MenuItem

  if (!selectedFood) {
    return <div className="ml-60 mt-20">No food selected</div>;
  }

  return (
    <div className="ml-60 mt-20">
      <div className="flex">
        <div className="mr-40">
          <img src={selectedFood.image} alt={selectedFood.name} width="360" height="360" />
          <div className="ml-8 mt-8">
            <div className="text-topic font-bold text-[40px] mb-4">Ingredients</div>
            {selectedFood.ingredients.map((ingredient, index) => (
              <div key={index} className="text-topic text-[20px]">
                {ingredient.ingredient}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-topic font-bold text-[64px]">{selectedFood.name}</div>
          <div className="flex">
            <img src={ricelogo} alt="Logo" width="55" height="55" className="mr-4" />
            <div className="text-[25px] text-topic font-bold my-auto">{selectedFood.PackageName}</div>
          </div>
          <div className="w-[800px] mt-10 font-bold text-topic text-[20px]">{selectedFood.Description}</div>
          <img src={line} width="594" className="mt-10" />
          <div className="text-topic font-bold text-[40px] mt-6">How to cook</div>
          <img src={video} alt="video" width="440" height="246" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default RecipeFood;
