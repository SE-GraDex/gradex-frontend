import React from 'react'
import search from '../../../assets/images/search-sky.svg'
import { useState } from 'react'
import pulscircle from '../../../assets/images/plus-circle.svg'
import edit from '../../../assets/images/Edit.svg'
import info from '../../../assets/images/Info.svg'

import { menuItems, MenuItem } from '../../../interface/global.types'
import ModalNewMenu from './ModalNewMenu'
import ModalViewMenu from './ModalViewMenu'
import ModalEditMenu from './ModalEditMenu'

const MealManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const [menuList, setMenuList] = useState<MenuItem[]>(menuItems)
  const [isPopUpOpenView, setIsPopUpOpenView] = useState(false)
  const [isPopUpOpenEdit, setIsPopUpOpenEdit] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // const handleAddNewMenu = (newMenu: MenuItem) => {
  //     setMenuList([...menuList, newMenu]);
  // };
  // const handleAddNewMenu = (newMenu: MenuItem) => {
  //     setMenuList((prevMenuList) => {
  //         const updatedMenuList = prevMenuList.filter(menu => menu.name !== newMenu.name); // ลบเมนูเก่าที่มี id เหมือนกับใหม่
  //         return [...updatedMenuList, newMenu]; // เพิ่มเมนูใหม่เข้าไป
  //     });
  // };

  const handleAddNewMenu = (newMenu: MenuItem) => {
    setMenuList((prevMenuList) => {
      const index = prevMenuList.findIndex((menu) => menu.name === newMenu.name) // หาตำแหน่งที่มี id เหมือนกับ newMenu
      if (index !== -1) {
        // ถ้ามีค่าเก่าที่ตรงกัน ให้แทนที่ค่าเก่าด้วย newMenu
        const updatedMenuList = [...prevMenuList]
        updatedMenuList[index] = newMenu
        return updatedMenuList
      }
      // ถ้าไม่เจอค่าซ้ำ ให้เพิ่ม newMenu ไปที่ท้ายอาเรย์
      return [...prevMenuList, newMenu]
    })
  }

  const filteredIngredients = menuList.filter((menu) => menu.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col items-center">
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
      <div className="w-[573px] flex  items-start text-white mb-4">
        <div>Total Menu : {filteredIngredients.length}</div>
      </div>
      <div className="w-[573px] flex justify-between text-white mb-4">
        <div>Basic Menu : {filteredIngredients.filter((item) => item.PackageName === 'Basic').length}</div>
        <div>Deluxe Menu : {filteredIngredients.filter((item) => item.PackageName === 'Deluxe').length}</div>
        <div>Premium Menu : {filteredIngredients.filter((item) => item.PackageName === 'Premium').length}</div>
      </div>
      <div className="w-[573px] grid grid-cols-2 gap-2 text-center font-semibold mb-2 text-[#386C5F]">
        <div className="w-[158px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center text-lg">
          Menu
        </div>
        <div className="flex justify-self-end gap-2">
          <div className="w-[110px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center justify-self-end text-lg">
            Tier
          </div>
          <div className="flex justify-center items-center hover:cursor-pointer">
            <img
              src={pulscircle}
              className="w-[25px] h-[25px]"
              alt="Plus Circle"
              onClick={() => setIsPopUpOpen(true)}
            />
          </div>
          <div className="w-[25px] h-[25px]"></div>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[300px] custom-scrollbarIngredient text-lg">
        {filteredIngredients.map((menu, index) => (
          <div className="w-[573px] grid grid-cols-2 gap-2 mb-5  text-white" key={index}>
            <div className="">{menu.name}</div>
            <div className="flex justify-self-end gap-2">
              <div className="">{menu.PackageName}</div>
              <div className="w-[25px] h-[25px]"></div>
              <div
                className="flex justify-center items-center hover:cursor-pointer"
                onClick={() => {
                  setSelectedIndex(index)
                  setIsPopUpOpenEdit(true)
                }}
              >
                <img src={edit} className="w-[25px] h-[25px]" alt="Edit" />
              </div>
              <div
                className="flex justify-center items-center hover:cursor-pointer"
                onClick={() => {
                  setSelectedIndex(index) // เก็บ index ของเมนูที่เลือก
                  setIsPopUpOpenView(true) // เปิด Modal
                }}
              >
                <img src={info} className="w-[25px] h-[25px]" alt="Info" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {isPopUpOpen && (
        <ModalNewMenu isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} onSubmit={handleAddNewMenu} />
      )}
      {isPopUpOpenView && (
        <ModalViewMenu
          isOpen={isPopUpOpenView}
          onClose={() => setIsPopUpOpenView(false)}
          menu={menuList[selectedIndex]}
        />
      )}
      {isPopUpOpenEdit && (
        <ModalEditMenu
          isOpen={isPopUpOpenEdit}
          onClose={() => setIsPopUpOpenEdit(false)}
          onSubmit={handleAddNewMenu}
          existingMenu={menuList[selectedIndex]}
        />
      )}
    </div>
  )
}

export default MealManagementPage
