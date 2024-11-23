import React, { useEffect, useState } from "react";
import { packageItems } from '../../interface/global.types'

interface DropdownPackageProps {
    onSubmit: (setPackage: 'Basic' | 'Deluxe' | 'Premium') => void;
}

const DropdownPackage: React.FC<DropdownPackageProps> = ({onSubmit}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<'Basic' | 'Deluxe' | 'Premium'>("Basic");
    const packages: ('Basic' | 'Deluxe' | 'Premium')[] = ["Basic", "Deluxe", "Premium"];
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        onSubmit(selectedPackage);
    }, [selectedPackage]);

    return (
        <div className="relative">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="w-[218px] h-[52px] p-2 border border-gray-300 rounded-2xl flex items-center bg-white text-[#066426]" 
                type="button"
            >
                 <img src={packageItems[selectedPackage as keyof typeof packageItems]} alt={selectedPackage} className="w-5 h-5 me-2" />
                 {selectedPackage}
                 <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-transparent border-t-[#47C171] ml-auto"></div>

            </button>

            {isOpen && (
                <div
                    id="dropdown"
                    className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {packages.map((item:'Basic' | 'Deluxe' | 'Premium') => (
                            <li key={item}>
                                <div className="flex bg-white px-4 py-2 hover:bg-white dark:hover:bg-white dark:hover:text-green-600 text-[#066426] hover:cursor-pointer"
                                    onClick={() => {
                                        setSelectedPackage(item);
                                        setIsOpen(false);
                                    }}>
                                    <a
                                        href="#"
                                    >
                                    </a>
                                    <img src={packageItems[item as keyof typeof packageItems]} alt={item} className="w-5 h-5 me-2" />
                                    {item}
                                </div>
                            </li>
                        ))}
                        {/* <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Sign out
                            </a>
                        </li> */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownPackage;
