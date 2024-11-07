import React, { useState, useEffect } from 'react';
import CalendarTest from './CalendarProps';
import ButtonLink from '../button/ButtonLink';
import CardTemp from './CardTemp';

const getMonthNumber = (monthName: string): number => {
    const months: { [key: string]: number } = {
        'January': 1,
        'February': 2,
        'March': 3,
        'April': 4,
        'May': 5,
        'June': 6,
        'July': 7,
        'August': 8,
        'September': 9,
        'October': 10,
        'November': 11,
        'December': 12
    };
    console.log(months[monthName]);
    return months[monthName] || -1; // คืนค่า -1 ถ้าไม่เจอ
};


const MonthSelector: React.FC<{ onMonthChange: (month: string) => void }> = ({ onMonthChange }) => {
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
        onMonthChange(selectedMonth);
    }, [selectedMonth]);

    const handleMonthChange = (month: string) => {
        setSelectedMonth(month);
        // onMonthChange(month); // ส่งค่าเดือนที่เลือกไปยังฟังก์ชัน onMonthChange ที่ถูกส่งมาเป็น prop
        setIsOpen(false); // ปิด dropdown เมื่อเลือกเดือน
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-[368px] h-[50px] flex items-center p-2 bg-white">
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

const MealPreparation: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('January'); // ตั้งค่าเริ่มต้นเป็นเดือนแรก

    return (
        <div className='flex justify-center mt-10'>
            <div className='justify-self-center'>
                <div className="ml-10">Meal Preparation</div>
                <MonthSelector onMonthChange={setSelectedMonth} /> {/* ส่ง setSelectedMonth เป็น prop */}
                <CalendarTest isMorningTheme={true} isMonthSelectorOpen={getMonthNumber(selectedMonth)} /> {/* ส่ง selectedMonth เป็น prop */}
                <ButtonLink label="Auto filled" link="/" />
            </div>
            <div className='flex flex-col space-y-10'>
                <CardTemp Height={250} Width={617} />
                <CardTemp Height={375} Width={617} />
        </div>
        </div>
    );
};

export default MealPreparation;
