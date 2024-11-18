import React from 'react';
import search from '../../../assets/images/search-sky.svg';
import { useState } from 'react';
import pulscircle from '../../../assets/images/plus-circle.svg';
import edit from '../../../assets/images/Edit.svg';
import info from '../../../assets/images/Info.svg';

import { menuItems, MenuItem } from '../../../interface/global.types';
import ModalNewMenu from './ModalNewMenu';
import ModalViewMenu from './ModalViewMenu';
import ModalEditMenu from './ModalEditMenu';



const MealManagementPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [menuList, setMenuList] = useState<MenuItem[]>(menuItems);
    const [isPopUpOpenView, setIsPopUpOpenView] = useState(false);
    const [isPopUpOpenEdit, setIsPopUpOpenEdit] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleAddNewMenu = (newMenu: MenuItem) => {
        setMenuList([...menuList, newMenu]);
    };


    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-5xl font-semibold mb-4 text-white jsu">Meal Management</h1>
            <div className="mb-6 text-center">
                <label className="block font-medium text-white justify-self-start text-sm">Search Menu</label>
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        className="w-[260px] h-[45px] rounded-l-lg border border-gray-300 pl-3 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="w-[90px] h-[45px] bg-[#A6EAD4] flex justify-center items-center rounded-r-3xl">
                        <img src={search} className="w-[25px] h-[25px]" alt="Search icon" />
                    </div>
                </div>
            </div>
            <div className='w-[573px] flex  items-start'>
                <div>
                    Total Menu : 60
                </div>
            </div>
            <div className='w-[573px] flex justify-between'>
                <div>Basic Menu : 20</div>
                <div>Deluxe Menu : 30</div>
                <div>Premium Menu : 10</div>
            </div>
            <div className="w-[573px] grid grid-cols-2 gap-2 text-center font-semibold mb-2 text-[#386C5F]">
                <div className="w-[158px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center">Menu</div>
                <div className="flex justify-self-end gap-2">
                    <div className="w-[110px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center justify-self-end">Tier</div>
                    <div className="flex justify-center items-center hover:cursor-pointer">
                        <img src={pulscircle} className="w-[25px] h-[25px]" alt="Plus Circle" onClick={() => setIsPopUpOpen(true)} />
                    </div>
                    <div className='w-[25px] h-[25px]'></div>
                </div>
            </div>
            {menuList.map((menu, index) => (
                <div className='w-[573px] grid grid-cols-2 gap-2 mb-5' key={index}>
                    <div className=''>
                        {menu.name}
                    </div>
                    <div className='flex justify-self-end gap-2'>
                        <div className=''>
                            {menu.PackageName}
                        </div>
                        <div className='w-[25px] h-[25px]'></div>
                        <div className="flex justify-center items-center hover:cursor-pointer"
                            onClick={
                                () => {
                                    setSelectedIndex(index);
                                    setIsPopUpOpenEdit(true);
                                }
                            }>
                            <img src={edit} className="w-[25px] h-[25px]" alt="Edit" />
                        </div>
                        <div className="flex justify-center items-center hover:cursor-pointer"
                            onClick={() => {
                                setSelectedIndex(index); // เก็บ index ของเมนูที่เลือก
                                setIsPopUpOpenView(true); // เปิด Modal
                            }}>
                            <img src={info} className="w-[25px] h-[25px]" alt="Info" />
                        </div>
                    </div>
                </div>
            )
            )}
            {isPopUpOpen && <ModalNewMenu isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} onSubmit={handleAddNewMenu} />}
            {isPopUpOpenView && <ModalViewMenu isOpen={isPopUpOpenView} onClose={() => setIsPopUpOpenView(false)} menu={menuList[selectedIndex]} />}
            {isPopUpOpenEdit && <ModalEditMenu isOpen={isPopUpOpenEdit} onClose={() => setIsPopUpOpenEdit(false)} onSubmit={handleAddNewMenu} existingMenu={menuList[selectedIndex]} />}
        </div>
    );
};

export default MealManagementPage;