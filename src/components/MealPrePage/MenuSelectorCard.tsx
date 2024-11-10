import React from 'react';
import CardTemp from './CardTemp';
import ImageSlider from './ImageSlider';
import SalmonSteakBig from '../../assets/images/imagesForMealPre/salmon-steak2.svg';
import bowlrice from '../../assets/images/imagesForMealPre/bowl-rice.svg';
import { useState } from 'react';

type Ingredient = {
    ingredient: string;
    portion: number;
    unit: string;
};

interface Day {
    day: number;
    detail: Record<string, Ingredient[]>;
    status: number;
};
interface Months {
    "0": (null | Day)[]
    "1": (null | Day)[]
    "2": (null | Day)[]
    "3": (null | Day)[]
    "4": (null | Day)[]
    "5": (null | Day)[]
    "6": (null | Day)[]
    "7": (null | Day)[]
    "8": (null | Day)[]
    "9": (null | Day)[]
    "10": (null | Day)[]
    "11": (null | Day)[]
};


type IngredientsData = Record<string, Ingredient[]>;

const ingredientsData: IngredientsData = {
    'Tom yum kung': [
        { ingredient: "Shrimp", portion: 200, unit: "g" },
        { ingredient: "Lemongrass", portion: 3, unit: "stalk" },
        { ingredient: "Kaffir Lime Leaves", portion: 5, unit: "leaves" },
        { ingredient: "Chili", portion: 2, unit: "pcs" },
        { ingredient: "Fish Sauce", portion: 2, unit: "tbsp" }
    ],
    'Salmon steak': [
        { ingredient: "King Salmon", portion: 500, unit: "g" },
        { ingredient: "Broccoli", portion: 5, unit: "pcs" },
        { ingredient: "Lemon", portion: 3, unit: "slice" }
    ],
    'Pad Thai': [
        { ingredient: "Rice Noodles", portion: 200, unit: "g" },
        { ingredient: "Shrimp", portion: 100, unit: "g" },
        { ingredient: "Egg", portion: 2, unit: "pcs" },
        { ingredient: "Peanuts", portion: 2, unit: "tbsp" },
        { ingredient: "Tamarind Paste", portion: 1, unit: "tbsp" }
    ],
    'Deep fried sea bass': [
        { ingredient: "Sea Bass", portion: 1, unit: "fish" },
        { ingredient: "Garlic", portion: 5, unit: "cloves" },
        { ingredient: "Chili", portion: 3, unit: "pcs" },
        { ingredient: "Lime", portion: 2, unit: "pcs" },
        { ingredient: "Fish Sauce", portion: 3, unit: "tbsp" }
    ]
};



interface MunuSelectorCardProps {
    DateCurrent: Date | null;
    parentsMonth: Months;
    setSelectedMonths: React.Dispatch<React.SetStateAction<Months>>;
    toggle: (toggle: boolean) => void;
}



const MenuSelectorCard: React.FC<MunuSelectorCardProps> = ({ DateCurrent  , parentsMonth , setSelectedMonths ,toggle}) => {
    const [isMenuSelected, setIsMenuSelected] = useState<string>('');

    const handleSummit = () => {
        if (DateCurrent) {
            let yourDayValue: number = DateCurrent.getDate();
            let monthKey = DateCurrent.getMonth().toString() as keyof Months;
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
        toggle(false);
    }

    return (<div className="flex flex-col space-y-10">
        <ImageSlider Toggle={setIsMenuSelected} />
        {isMenuSelected === '' ? <CardTemp Height={'375'} Width={'617'} /> : <div className="w-[617px] h-[375px] bg-[#47C171] rounded-3xl">
            <div className='flex w-[467px] h-[120px] justify-self-center space-x-10'>
                <img className='w-[125px] h-[125px] mt-5' src={SalmonSteakBig} alt="Salmon steak" />
                <div className='flex flex-col'>
                    <div className='text-white justify-self-center text-2xl	mt-5 mb-3'>Select menu</div>
                    <div className='flex'>
                        <div className='w-[162px] h-[28px] bg-white text-[#A9A2A2] rounded-l-md flex items-center justify-start pl-2'>
                            {/* Salmon steak */} {isMenuSelected}
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
            <div className='w-[134px] h-[48px] bg-[#1E1E1E] text-white justify-self-center text-lg rounded-3xl flex items-center justify-center mt-5 hover:bg-white hover:text-black hover:border hover:border-black hover:cursor-pointer'
                onClick={handleSummit}    
            >
                Summit
            </div>
        </div>}

    </div>);
}

export default MenuSelectorCard;