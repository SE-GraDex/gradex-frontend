import React, { useEffect, useState } from "react";
import { MonthlyDays, Day, } from '../../interface/global.types';

interface CalendarProps {
    isToggle: boolean;
    isMonthSelectorOpen: number;
    onDateSelect: (date: Date) => void;
    toggle: (toggle: boolean) => void;
    months: MonthlyDays;
}

const CalendarTest: React.FC<CalendarProps> = ({ isToggle, isMonthSelectorOpen, onDateSelect, toggle, months }) => {
    const daysOfWeek: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthNames: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentYear = new Date().getFullYear();
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYearState, setCurrentYearState] = useState<number>(currentYear);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setCurrentMonth(isMonthSelectorOpen);
    }, [isMonthSelectorOpen]);

    useEffect(() => {
        // console.log(months.months[0]);
        // Object.keys(months).forEach((key) => {
        //     // console.log(key);
        //     Object.keys(months[key as keyof MonthlyDays]).forEach((day) => {
        //         console.log(day);
        //     });
        // });
        if (months[currentMonth.toString() as keyof MonthlyDays]) {
            setCalendarDays(months[currentMonth.toString() as keyof MonthlyDays]);
        }
        else {
            setCurrentMonth(new Date().getMonth());
            console.error("No data for this month:", currentMonth);
        }
    }, [currentMonth, months]);

    const [calendarDays, setCalendarDays] = useState<(null | Day)[]>(months[currentMonth.toString() as keyof MonthlyDays]);

    // useEffect(() => {
    //     console.log("calendarDays", calendarDays);
    // }, [calendarDays]);

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentYearState, currentMonth, day);
        setSelectedDate(newDate);
        onDateSelect(newDate);
        console.log("Selected date:", newDate.toDateString());
        setCalendarDays((prevCalendarDays) => {
            const updatedCalendarDays = [...prevCalendarDays];
            const index = updatedCalendarDays.findIndex((item) => item && item.day === day);

            if (index !== -1 && updatedCalendarDays[index]) {
                const currentStatus = updatedCalendarDays[index]?.status;
                updatedCalendarDays[index] = {
                    ...updatedCalendarDays[index],
                    status: currentStatus === 0 ? 2 : 0,  // Toggle status between 0 and 2, or set to 0 if it's 1
                    detail: currentStatus === 1 ? {} : updatedCalendarDays[index]?.detail // Set detail to {} if currentStatus is 1
                };
            }
            return updatedCalendarDays;
        });

        toggle(!isToggle);
    };

    return (
        <div>
            <div className={`flex items-center justify-self-end space-x-4 text-4xl mb-2 font-bold  transition-colors duration-500 `}>
                <div>{monthNames[currentMonth] || monthNames[new Date().getMonth()]},</div>
                <div>{currentYearState}</div>
            </div>
            <div className="bg-[#8FC6B2] p-4 rounded-lg shadow-2xl	">
                <div className={`grid grid-cols-7 gap-2 mt-2 text-center text-white transition-colors duration-500`}>
                    {daysOfWeek.map((day) => (
                        <div key={day} className="text-sm bg-[#1E1E1E] p-2 rounded-3xl font-semibold">{day}</div>
                    ))}
                    {calendarDays.map((day, index) => {
                        let bgColor: string = '';
                        if (day && day.day) {
                            if (Object.keys(day.detail).length === 0 && day.status === 0) {
                                bgColor = 'border border-black';
                            } else if (Object.keys(day.detail).length > 0 && day.status === 1) {
                                bgColor = 'bg-[#30E06C] border border-[#30E06C]';  // Dark green
                            } else if (day.status === 2) {
                                bgColor = 'bg-[#C6FFEA] border border-[#C6FFEA]'; // Light green
                            }
                        }

                        return (
                            <div
                                key={index}
                                className={`w-6 h-6 ${bgColor} text-black justify-self-center w-[67px] h-[48px] p-4 rounded-3xl flex items-center justify-center cursor-pointer font-mono`}
                                onClick={() => day?.day && handleDateClick(day?.day)}
                                title={day?.day ? `${day.day} ${monthNames[currentMonth]} ${currentYearState}` : ""}
                            >
                                {day?.day || ''}
                            </div>
                        );
                    })}
                </div>
                <div className="font-medium mt-8">
                    Selected Date: {selectedDate.toDateString()}
                </div>
            </div>
        </div>
    );
};

export default CalendarTest;
