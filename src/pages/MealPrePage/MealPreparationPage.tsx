import React, { useState, useEffect } from 'react';
import CalendarTest from './CalendarProps';
import CardTemp from './CardTemp';
import MunuSelectorCard from './MenuSelectorCard';
import UserStatus from './UserStatus.json'
import { months, MonthlyDays, menuItems } from '../../interface/global.types';
// import axios from 'axios';

const MonthSelector: React.FC<{ onMonthChange: (month: string) => void }> = ({ onMonthChange }) => {
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        onMonthChange(selectedMonth);
    }, [selectedMonth]);

    const handleMonthChange = (month: string) => {
        setSelectedMonth(month);
        setIsOpen(false); // ปิด dropdown เมื่อเลือกเดือน
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div className="w-[368px] h-[50px] flex items-center bg-white mt-7 mb-7">
            <div className='w-[273px] h-[50px] border rounded-l-lg border-green-400 flex items-center justify-start'>
                <div className={`text-xl p-2 ${!selectedMonth ? 'text-gray-400' : 'text-black'}`}>
                    {selectedMonth || 'Select month'}
                </div>
            </div>
            <button
                onClick={toggleDropdown}
                className="ml-auto bg-green-400 p-2 rounded-r-3xl w-[95px] h-[50px] "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="w-7 h-7 justify-self-center"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    id="dropdown"
                    className="z-10 divide-y divide-gray-100 rounded-lg shadow w-[368px] bg-[#C6FFEA] absolute mt-56 max-h-40 overflow-y-auto custom-scrollbar"
                >
                    <ul className="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                        {months.map((month, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    onClick={() => handleMonthChange(month)}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-black"
                                >
                                    {month}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Helper function to automatically fill each day with a meal
function fillCompleteMeals(monthData: MonthlyDays, selectedMonth: string) {
    const updatedMonths = { ...monthData };

    // Map selectedMonth to its index (e.g., 'January' to 0, 'February' to 1, etc.)
    const selectedMonthIndex = selectedMonth as keyof MonthlyDays;
    console.log(selectedMonthIndex);
    // Ensure the selectedMonthIndex exists in the data
    if (updatedMonths[selectedMonthIndex]) {
        // Iterate over each day in the selected month
        console.log(updatedMonths[selectedMonthIndex]);
        updatedMonths[selectedMonthIndex] = updatedMonths[selectedMonthIndex].map((day) => {
            const randomMeal = menuItems[Math.floor(Math.random() * menuItems.length)];
            if (day === null) {
                return null;
            }
            else {
                return {
                    day: day.day,
                    detail: { [randomMeal.name]: randomMeal.ingredients },
                    status: 1,
                };
            }
        });
    }

    return updatedMonths;
}






const MealPreparation: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('January'); // ตั้งค่าเริ่มต้นเป็นเดือนแรก
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [toggle, setToggle] = useState<boolean>(false);
    const [selectedMonths, setSelectedMonths] = useState<MonthlyDays>(UserStatus['months']);

    // axios.post('http://localhost:3000/api/meal-preparation', { 
    //     "name": UserStatus["name"],
    //     "surname": UserStatus, "months": selectedMonths
    // })
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.error('There was an error!', error);
    //     });

    const handleAutoFill = () => {
        // Find the index of the selected month based on the month name
        const selectedMonthIndex = months.indexOf(selectedMonth).toString() as keyof MonthlyDays;

        // Update the state with the filled data for the specific month
        const filledMonths = fillCompleteMeals(selectedMonths, selectedMonthIndex);
        // console.log(filledMonths);
        // Set the updated months state to trigger a UI re-render
        setSelectedMonths(filledMonths); // React state update
    };

    // useEffect(() => {
    //     console.log(selectedMonths);
    // },[selectedMonths]);

    return (
        <div className='flex justify-center mt-10 space-x-16 '>
            <div className='justify-self-center'>
                <div className="text-6xl mb-4 text-[#386C5F] font-bold	">Meal Preparation</div>
                <MonthSelector onMonthChange={setSelectedMonth} />
                <CalendarTest isToggle={toggle} isMonthSelectorOpen={months.indexOf(selectedMonth)} onDateSelect={setSelectedDate} toggle={setToggle} months={selectedMonths} />
                {/* <ButtonLink label="Auto filled" link="/" /> */}
                <div className='flex flex-row justify-self-center items-center justify-center mt-4 space-x-3'>
                    <a
                        onClick={handleAutoFill}
                        className="w-[160px] h-[48px] border border-[#30E06C] rounded-full text-black bg-[#30E06C] hover:text-[#30E06C] hover:bg-white transition-all duration-200 flex justify-center items-center hover:cursor-pointer justify-self-center"
                    >
                        Auto filled
                    </a>
                    <div className="w-[30px] h-[30px] text-[#C6FFEA] bg-[#066426] rounded-full text-xl flex justify-center items-center hover:cursor-pointer" title='จะ filled ทุกวันที่ให้มีเมนูอาหารครบทุกวัน'>
                        i
                    </div>

                </div>
            </div>
            <div className='flex flex-col space-y-10'>
                {toggle ? (
                    <MunuSelectorCard DateCurrent={selectedDate} parentsMonth={selectedMonths} setSelectedMonths={setSelectedMonths} toggle={setToggle} />
                ) : (
                    <>
                        <CardTemp Height={'250'} Width={'617'} />
                        <CardTemp Height={'375'} Width={'617'} />
                    </>
                )}
            </div>
        </div>
    );
};

export default MealPreparation;
