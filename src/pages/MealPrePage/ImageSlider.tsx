import React, { useEffect, useState } from 'react';
import Search from '../../assets/images/imagesForMealPre/search.svg';
import { packageItems, MenuItem } from '../../interface/global.types';
import axios from 'axios';

interface switchCardProps {
    Toggle: (value: string) => void;
}

const removeParentheses = (input: string) => {
    return input.replace(/\(.*?\)/g, '').trim();
};


const ImageSlider: React.FC<switchCardProps> = ({ Toggle }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [SelectOrder, setSelectOrder] = useState<string>('');
    const [menuItemTest, setmenuItemTest] = useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        Toggle(SelectOrder);
    }, [SelectOrder]);


    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const packageResponse = await axios.get('http://localhost:8080/api/user/getCurrentUserPackage', { withCredentials: true });
                const currentPackage = packageResponse.data.data.activePackage.package_name;
                // console.log("currentPackage", currentPackage);
                const response = await axios.get('http://localhost:8080/api/menu/getMenus');
                const mappedMenus: MenuItem[] = response.data.map((item: any) =>
                ({
                    name: item.menu_title,
                    image: item.menu_image,
                    PackageName: item.package,
                    Description: item.menu_description,
                    ingredients: [item.ingredient_list.map((ingredient: any) => ({
                        ingredient: ingredient.name,
                        portion: ingredient.portion,
                        unit: ingredient.unit,
                        priceperunit: ingredient.priceperunit
                    }))]
                })).filter((item: MenuItem) => item.PackageName <= currentPackage);
                // console.log("menu", mappedMenus);
                setmenuItemTest(mappedMenus);
                setIsLoading(false);
            } catch (err) {
                console.log('Error fetching menu data', err);
            }
        };

        fetchMenus();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const itemsPerPage = 4;
    const filteredItems = menuItemTest.filter(item =>
        item.name.includes(searchTerm)
    );

    const totalItems = filteredItems.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    return (
        <div className="bg-[#47C171] rounded-3xl text-center w-[617px] p-4 shadow-lg mx-auto">
            <h2 className="text-white text-xl font-semibold mb-2">Select Menu</h2>

            <div className="flex items-center justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[162px] h-[28px] px-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <button className="text-white w-[56px] h-[28px] bg-[#30E06C] rounded-r-3xl">
                    <img className="w-5 h-5 mx-auto" src={Search} alt="Search" />
                </button>
            </div>

            <div className="flex items-center justify-center">
                <div
                    className="w-0 h-0 border-t-[25px] border-b-[25px] border-r-[25px] border-t-transparent border-b-transparent border-r-white hover:cursor-pointer"
                    onClick={goToPrevious}
                ></div>

                <div className="flex overflow-hidden w-full justify-center space-x-4">
                    {filteredItems
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .concat(filteredItems.slice(0, (currentIndex + itemsPerPage) % totalItems))
                        .slice(0, itemsPerPage)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center hover:cursor-pointer"
                                onClick={() => setSelectOrder(item.name)}
                            >
                                <img
                                    src={packageItems[item.PackageName || 'Basic']}
                                    className="w-[20px] h-[20px] rounded-full mb-2"
                                />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[100px] h-[100px] rounded-full"
                                />
                                <p className="text-white mt-2 text-sm font-bold">{removeParentheses(item.name)}</p>
                            </div>
                        ))}
                </div>

                <div
                    className="w-0 h-0 border-t-[25px] border-b-[25px] border-l-[25px] border-t-transparent border-b-transparent border-l-white hover:cursor-pointer"
                    onClick={goToNext}
                ></div>
            </div>
        </div>
    );
};

export default ImageSlider;