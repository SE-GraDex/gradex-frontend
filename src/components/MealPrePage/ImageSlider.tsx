import React, { useEffect, useState } from 'react';
import riceImages from '../../assets/images/imagesForMealPre/bowl-rice.svg';
import crownImages from '../../assets/images/imagesForMealPre/crown.svg';
import daimondImages from '../../assets/images/imagesForMealPre/diamond.svg';
import FriedFish from '../../assets/images/imagesForMealPre/fried-fish.svg';
import PadThai from '../../assets/images/imagesForMealPre/pad-thai.svg';
import SalmonSteak from '../../assets/images/imagesForMealPre/salmon-steak.svg';
import TomYumKung from '../../assets/images/imagesForMealPre/tom-yum-kung.svg';
import Search from '../../assets/images/imagesForMealPre/search.svg';

type MenuItem = {
    name: string;
    image: string;
    PackageName?: 'Basic' | 'Deluxe' | 'Premium' | '';
};


const packageItems =
{
    'Basic': riceImages,
    'Deluxe': daimondImages,
    'Premium': crownImages,

}

interface switchCardProps {
    Toggle: (value: string) => void;
}

const menuItems: MenuItem[] = [
    { name: 'Tom yum kung', image: TomYumKung, PackageName: 'Deluxe' },
    { name: 'Salmon steak', image: SalmonSteak, PackageName: 'Basic' },
    { name: 'Pad Thai', image: PadThai, PackageName: 'Basic' },
    { name: 'Deep fried sea bass', image: FriedFish, PackageName: 'Premium' },
];



const ImageSlider: React.FC<switchCardProps> = ({ Toggle }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [SelectOrder, setSelectOrder] = useState<string>('');

    useEffect(() => {
        Toggle(SelectOrder);
    }, [SelectOrder]);

    const itemsPerPage = 4;
    const filteredItems = menuItems.filter(item =>
        item.name.includes(searchTerm)
    );

    // const filteredItems = menuItems.filter(item =>
    //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const totalItems = filteredItems.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };


    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    return (
        <div className="bg-[#47C171]  rounded-3xl text-center w-[617px] h-[250px] shadow-lg">
            <h2 className="text-white text-xl font-semibold mb-2">Select Menu</h2>

            <div className="flex items-center mb-4 justify-self-center">
                <input
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[162px] h-[28px] rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <button className="text-white w-[56px] h-[28px] bg-[#30E06C] rounded-r-3xl">
                    <img className='justify-self-center' src={Search} alt="Search" />
                </button>
            </div>

            <div className="flex items-center">
                <div
                    className="w-0 h-0 border-t-[25px] border-b-[25px] border-r-[25px] border-t-transparent border-b-transparent border-r-white hover:border-r- hover:cursor-pointer"
                    onClick={goToPrevious}
                ></div>

                <div className="flex overflow-hidden w-full justify-center space-x-4">
                    {filteredItems
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .concat(filteredItems.slice(0, (currentIndex + itemsPerPage) % totalItems))
                        .slice(0, itemsPerPage)
                        .map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center hover:cursor-pointer" onClick={() => setSelectOrder(item.name)}>
                                <img
                                    src={packageItems[item.PackageName || 'Basic']}
                                    className="w-[20px] h-[20px] rounded-full mb-2"
                                />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full"
                                />
                                <p className="text-white mt-2">{item.name}</p>
                            </div>

                        ))}
                </div>

                {/* Next Button */}
                <div
                    className="w-0 h-0 border-t-[25px] border-b-[25px] border-l-[25px] border-t-transparent border-b-transparent border-l-white hover:cursor-pointer"
                    onClick={goToNext}
                ></div>
            </div>
        </div>
    );
};



export default ImageSlider;
