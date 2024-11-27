import React, { useEffect, useState } from 'react';
import Search from '../../assets/images/imagesForMealPre/search.svg';
import { menuItems, packageItems  , MenuItem ,menuItems2} from '../../interface/global.types';
import axios from 'axios';

// const menuItems: MenuItem[] = [
//     { name: 'Tom yum kung', image: TomYumKung, PackageName: 'Deluxe' },
//     { name: 'Salmon steak', image: SalmonSteak, PackageName: 'Basic' },
//     { name: 'Pad Thai', image: PadThai, PackageName: 'Basic' },
//     { name: 'Deep fried sea bass', image: FriedFish, PackageName: 'Premium' },
// ];

interface switchCardProps {
    Toggle: (value: string) => void;
}

const ImageSlider: React.FC<switchCardProps> = ({ Toggle }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [SelectOrder, setSelectOrder] = useState<string>('');
    console.log('this ->',menuItems2);
    useEffect(() => {
        Toggle(SelectOrder);
    }, [SelectOrder]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/menu/getMenus');
                // console.log(response.data);

                const mappedMenus :MenuItem[]  = response.data.map((item: any) => ({
                    name: item.menu_title,
                    image: item.menu_image,
                    packageName: item.package,
                    Description: item.menu_description,
                    ingredients: [ item.ingredient_list.map((ingredient: any) => ({
                        ingredient: ingredient.name,
                        portion: ingredient.portion,
                        unit: 'unit',
                        priceperunit: 0
                    }))
                    ],
                }));
                // console.log('this ->',mappedMenus[0]);
            } catch (err) {
                console.log('Error fetching menu data', err);
            }
        };

        fetchMenus();
    }, []);

    const itemsPerPage = 4;
    const filteredItems = menuItems.filter(item =>
        item.name.includes(searchTerm)
    );

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/user/getCurrentUserPackage",{
    //         withCredentials: true,
    //     }).then((res: any) => {
    //         console.log(res.data);
    //     }).catch((err: any) => {
    //         console.log("Error occurs", err);
    //     });
    // } , [])
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
                                    className="w-[100px] h-[100px] rounded-full"
                                />
                                <p className="text-white mt-2 text-sm font-bold">{item.name}</p>
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
