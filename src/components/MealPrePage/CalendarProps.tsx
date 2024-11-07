import React, { useEffect, useState } from "react";

interface CalendarProps {
    isMorningTheme: boolean;
    isMonthSelectorOpen: number;
    onDateSelect: (date: Date) => void;
}
const CalendarTest: React.FC<CalendarProps> = ({ isMorningTheme, isMonthSelectorOpen , onDateSelect  }) => {
    const daysOfWeek: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // เริ่มจากวันอาทิตย์
    const monthNames: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYearState, setCurrentYearState] = useState(currentYear);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);

    useEffect(() => {
        setCurrentMonth(isMonthSelectorOpen);
    }, [isMonthSelectorOpen]);

    const attendanceStatus: { [key: string]: { status: string; detail?: string; checkInMorning?: string; checkOutMorning?: string; checkInEvening?: string; checkOutEvening?: string } } = {
        "1": { status: 'ขาด' },
        "2": { status: 'ลา', detail: 'มีธุระส่วนตัว' },
        "3": { status: 'มา', checkInMorning: '09:15:00', checkOutMorning: '12:00:00', checkInEvening: '13:00:00', checkOutEvening: '17:00:00' },
        "4": { status: 'สาย', checkInMorning: '09:45:00', checkOutMorning: '12:00:00', checkInEvening: '13:00:00', checkOutEvening: '17:00:00' }
    };

    const getDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOffset = (year: number, month: number): number => {
        return new Date(year, month, 1).getDay(); // ปรับให้เริ่มจากวันอาทิตย์
    };

    const daysInMonth = getDaysInMonth(currentYearState, currentMonth);
    const firstDayOffset = getFirstDayOffset(currentYearState, currentMonth);

    interface CalendarDay {
        day: number;
        detail: any;
        status: number;
    }

    
    // ใช้ useState เพื่ออัพเดต calendarDays
    const [calendarDays, setCalendarDays] = useState<(CalendarDay | null)[]>([
        ...Array(firstDayOffset).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1, detail: {}, status: 0 })),
    ]);
    
    useEffect(() => {  
        console.log(calendarDays);
    }, [calendarDays]);

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentYearState, currentMonth, day);
        setSelectedDate(newDate);
        onDateSelect(newDate); 
        // ใช้ setState เพื่ออัพเดต calendarDays โดยการคำนวณสถานะใหม่
        setCalendarDays((prevCalendarDays) => {
            const updatedCalendarDays = [...prevCalendarDays];
            const index = updatedCalendarDays.findIndex((item) => item && item.day === day);

            if (index !== -1 && updatedCalendarDays[index]) {
                const currentStatus = updatedCalendarDays[index]?.status;
                updatedCalendarDays[index] = {
                    ...updatedCalendarDays[index],
                    status: currentStatus === 0 ? 2 : 0,  // สลับสถานะจาก 0 เป็น 2 หรือจาก 2 เป็น 0
                };
            }
            return updatedCalendarDays;
        });

        const statusDetail = attendanceStatus[day]?.detail;
        const status = attendanceStatus[day]?.status;
        const record = attendanceStatus[day];

        if (status === 'ขาด') {
            setAttendanceMessage(null);
        } else if (status === 'ลา') {
            setAttendanceMessage(`เหตุผลที่ลา: ${statusDetail}`);
        } else if (status === 'สาย' || status === 'มา') {
            setAttendanceMessage(`
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">Check-in (Morning):</td>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">${record?.checkInMorning || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">Check-out (Morning):</td>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">${record?.checkOutMorning || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">Check-in (Afternoon):</td>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">${record?.checkInEvening || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">Check-out (Afternoon):</td>
                        <td style="padding: 8px; border: 1px solid #ccc; text-align: left;">${record?.checkOutEvening || 'Not specified'}</td>
                    </tr>
                </table>
            `);
        } else {
            setAttendanceMessage(null);
        }
    };

    return (
        <div className="bg-[#8FC6B2] p-4 rounded-lg">
            <div className={`flex items-center justify-self-end space-x-4 text-2xl font-bold ${isMorningTheme ? "text-white" : "text-[#8D8DF8]"} transition-colors duration-500`}>
                <div>{monthNames[currentMonth] || monthNames[new Date().getMonth()]}</div>
                <div>{currentYearState}</div>
            </div>
            <div className={`grid grid-cols-7 gap-2 mt-4 text-center ${isMorningTheme ? "text-white" : "text-[#8D8DF8]"} transition-colors duration-500`}>
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-sm bg-[#1E1E1E] p-2 rounded-3xl font-semibold">{day}</div>
                ))}
                {calendarDays.map((day, index) => {
                    let bgColor: string = '';
                    if (day && day.day) {
                        if (Object.keys(day.detail).length === 0 && day.status === 0) {
                            bgColor = 'border border-black';
                        } else if (Object.keys(day.detail).length > 0 && day.status === 0) {
                            bgColor = 'bg-[#30E06C] border border-[#30E06C]';
                        } else if (day.status === 2) {
                            bgColor = 'bg-[#C6FFEA] border border-[#C6FFEA]';
                        }
                    }

                    return (
                        <div
                            key={index}
                            className={`w-6 h-6 ${bgColor} text-black justify-self-center w-[67px] h-[48px] p-4 rounded-3xl flex items-center justify-center cursor-pointer font-mono`}
                            onClick={() => day?.day && handleDateClick(day?.day)}
                            title={day ? `${day} ${monthNames[currentMonth]} ${currentYearState}` : ""}
                        >
                            {day?.day || ''}
                        </div>
                    );
                })}
            </div>
            <div className="font-medium mt-8">
                Selected Date: {selectedDate.toDateString()}
            </div>
            {attendanceMessage && (
                <div className="mt-2 text-sm font-medium" dangerouslySetInnerHTML={{ __html: attendanceMessage }} />
            )}
        </div>
    );
};

export default CalendarTest;
