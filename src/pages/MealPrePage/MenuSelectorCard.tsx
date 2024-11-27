import React from 'react';
import CardTemp from './CardTemp';
import ImageSlider from './ImageSlider';
import bowlrice from '../../assets/images/imagesForMealPre/bowl-rice.svg';
import { useState } from 'react';
import { MonthlyDays, IngredientsData, menuItems } from '../../interface/global.types';
import MealPrepModal from './MealPrepModal';
import axios from 'axios';


const ingredientsData: IngredientsData = menuItems.reduce<IngredientsData>((acc, item) => {
    acc[item.name] = item.ingredients;
    return acc;
}, {});

// console.log(ingredientsData);

interface MunuSelectorCardProps {
    DateCurrent: Date | null;
    parentsMonth: MonthlyDays;
    setSelectedMonths: React.Dispatch<React.SetStateAction<MonthlyDays>>;
    toggle: (toggle: boolean) => void;
}



const MenuSelectorCard: React.FC<MunuSelectorCardProps> = ({ DateCurrent, parentsMonth, setSelectedMonths, toggle }) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isMenuSelected, setIsMenuSelected] = useState<string>('');

    // Open the modal
    const openPopUp = () => setIsPopUpOpen(true);

    // Close the modal and handle the submission logic
    const closePopUp = () => {
        setIsPopUpOpen(false);
        handleSummit();
    };

    const handleSummit = () => {
        if (DateCurrent) {
            let yourDayValue: number = DateCurrent.getDate();
            let monthKey = DateCurrent.getMonth().toString() as keyof MonthlyDays;
            let index: number = parentsMonth[monthKey].findIndex(item => item && item.day === yourDayValue);
            if (index !== -1 && parentsMonth[monthKey][index]) {
                setSelectedMonths(prevMonths => {
                    const updatedMonths = { ...prevMonths };
                    updatedMonths[monthKey][index]!.detail = { [isMenuSelected]: ingredientsData[isMenuSelected] };
                    updatedMonths[monthKey][index]!.status = 1;
                    return updatedMonths;
                });
            }
        }
        toggle(false); // Close the modal card after submitting
    };

    const handleMenuSelect = (menuName: string) => {
        let index: number = menuItems.findIndex(item => item.name === menuName);
        let menu = { name: menuName, PackageName: menuItems[index].PackageName, image: menuItems[index].image }
        return menu;
    }

    const getImg = (menuName: string) => {
        let index: number = menuItems.findIndex(item => item.name === menuName);
        return menuItems[index].image;
    }


    return (
        <div className="flex flex-col space-y-10">
            <ImageSlider Toggle={setIsMenuSelected} />
            {isMenuSelected === '' ? <CardTemp Height={'375'} Width={'617'} /> : (
                <div className="w-[617px] h-[475px] bg-[#47C171] rounded-3xl ">
                    <div className='flex w-[467px] h-[120px] justify-self-center space-x-10'>
                        <img className='w-[125px] h-[125px] mt-5' src={getImg(isMenuSelected)} alt="Salmon steak" />
                        <div className='flex flex-col'>
                            <div className='text-white justify-self-center text-2xl mt-5 mb-3'>Select menu</div>
                            <div className='flex'>
                                <div className='w-[162px] h-[28px] bg-white text-[#A9A2A2] rounded-l-md flex items-center justify-start pl-2'>
                                    {/* Display selected menu name */}
                                    {isMenuSelected}
                                </div>
                                <div className='w-[56px] h-[28px] bg-[#30E06C] rounded-r-3xl'>
                                    <img className='w-[25px] h-[25px] justify-self-center' src={bowlrice} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-white text-2xl font-semibold mb-2 text-center">Ingredient report</h3>
                    <div className="w-[467px] h-[2px] bg-white justify-self-center"></div>
                    <div className="grid grid-cols-3 gap-1 text-white text-lg justify-self-center justify-between text-center w-[467px]">
                        <div className="font-medium text-start">Ingredient</div>
                        <div className="font-medium">Portion</div>
                        <div className="font-medium">Unit</div>
                        {ingredientsData[isMenuSelected].map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="text-start">{item.ingredient}</div>
                                <div>{item.portion}</div>
                                <div>{item.unit}</div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="w-[467px] h-[2px] bg-white justify-self-center"></div>

                    <div
                        className='w-[134px] h-[48px] bg-[#1E1E1E] text-white justify-self-center text-lg rounded-3xl flex items-center justify-center mt-5 hover:bg-white hover:text-black hover:border hover:border-black hover:cursor-pointer'
                        onClick={() => {
                            const index = menuItems.findIndex(item => item.name === isMenuSelected);
                            // console.log(DateCurrent, menuItems[index]);
                            let tmp = {
                                "date": DateCurrent?.toISOString(),
                                "menu_image": menuItems[index].image,
                                "menu_title": menuItems[index].name,
                                "menu_description": menuItems[index].Description,
                                "ingredient_list": menuItems[index].ingredients.map(
                                    (item) => {
                                        return {
                                            "name": item.ingredient,
                                            "priceperunit": item.priceperunit ? item.priceperunit : 0,
                                            "portion": item.portion,
                                            "unit": item.unit,
                                        }
                                    }
                                ),
                                "status": 1,
                                "package_name": menuItems[index].PackageName
                            }
                            // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                            // console.log("Current Timezone:", timezone);
                            // console.log("Time:", DateCurrent);

                            // console.log(tmp);
                            async function addDailyOrder() {
                                try {
                                    const response = await axios.post(
                                        'http://localhost:8080/api/user/addDailyOrder',
                                        tmp, // ข้อมูลที่จะส่ง
                                        { withCredentials: true } // การตั้งค่าเพิ่มเติม
                                    );
                                    console.log('Order added successfully:', response);
                                } catch (error) {
                                    console.error('Error adding order:', error);
                                }
                            }
                            addDailyOrder();
                            openPopUp();
                        }} // Open the modal first
                    >
                        Submit
                    </div>

                    {/* Modal rendering */}
                    {isPopUpOpen && <MealPrepModal isOpen={isPopUpOpen} onClose={closePopUp} menu={handleMenuSelect(isMenuSelected)} />}
                </div>
            )}
        </div>
    );
};


export default MenuSelectorCard;