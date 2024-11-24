import React, { useState, useEffect, ChangeEvent } from 'react';

import addcircle from '../../../assets/images/add_circle.svg';
import trash from '../../../assets/images/Trash2.svg';
import { MenuItem } from '../../../interface/global.types';

interface GridRow {
    ingredient: string;
    portion: string;
    unit: string;
    pricePerUnit: string;
}

interface MealPrepModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedMenu: MenuItem) => void;
    existingMenu: MenuItem;
}

interface FormData {
    ingredientName: string;
    pricePerUnit: string;
    unit: string;
}

const ModalEditMenu: React.FC<MealPrepModalProps> = ({ isOpen, onClose, onSubmit, existingMenu }) => {
    if (!isOpen) return null;

    const [ingredientList, setIngredientList] = useState<FormData[]>([
        { ingredientName: 'Pork', pricePerUnit: '0.2', unit: 'gram' },
        { ingredientName: 'Chicken', pricePerUnit: '0.15', unit: 'gram' },
        { ingredientName: 'Rice', pricePerUnit: '0.5', unit: 'kg' },
        { ingredientName: 'Tomato', pricePerUnit: '1.0', unit: 'kg' },
        { ingredientName: 'Lettuce', pricePerUnit: '0.3', unit: 'kg' },
        { ingredientName: 'Egg', pricePerUnit: '0.7', unit: 'unit' },
        { ingredientName: 'Garlic', pricePerUnit: '0.1', unit: 'gram' },
        { ingredientName: 'Carrot', pricePerUnit: '0.6', unit: 'kg' },
        { ingredientName: 'Onion', pricePerUnit: '0.2', unit: 'kg' },
        { ingredientName: 'Cucumber', pricePerUnit: '0.4', unit: 'kg' },
    ]);

    const [fileName, setFileName] = useState<string>(existingMenu?.image || '');
    const [nameMenu, setNameMenu] = useState<string>(existingMenu?.name || '');
    const [selectedPackage, setSelectedPackage] = useState<string>(existingMenu?.PackageName || '');
    const [description, setDescription] = useState<string>(existingMenu?.Description || '');
    const [pricePerUnit, setPricePerUnit] = useState<string>('');
    const [ingredient, setIngredient] = useState<string>('');
    const [portion, setPortion] = useState<string>('');
    const [unit, setUnit] = useState<string>('grams');
    const [gridData, setGridData] = useState<GridRow[]>(existingMenu?.ingredients.map(ingredient => ({
        ingredient: ingredient.ingredient,
        portion: ingredient.portion.toString(),
        unit: ingredient.unit,
        pricePerUnit: (ingredient.priceperunit || 0).toString(),
    })) || []);

    useEffect(() => {
        if (existingMenu) {
            setFileName(existingMenu.image);
            setNameMenu(existingMenu.name);
            setSelectedPackage(existingMenu.PackageName);
            setDescription(existingMenu.Description || '');
            setGridData(existingMenu.ingredients.map(ingredient => ({
                ingredient: ingredient.ingredient,
                portion: ingredient.portion.toString(),
                unit: ingredient.unit,
                pricePerUnit: (ingredient.priceperunit?.toString() || '0'),
            })));
        }
    }, [existingMenu]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFileName(file ? file.name : '');
    };

    const handleAddToGrid = () => {
        if (ingredient && portion && unit) {
            setGridData([...gridData, { ingredient, portion, unit, pricePerUnit }]);
            setIngredient('');
            setPortion('');
        }
    };

    const handleDeleteRow = (index: number) => {
        const newGridData = [...gridData];
        newGridData.splice(index, 1);
        setGridData(newGridData);
    };

    const handleResize = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setDescription(textarea.value);
    };

    const handleSubmit = () => {
        const updatedMenu: MenuItem = {
            name: nameMenu,
            image: fileName,
            PackageName: selectedPackage as 'Basic' | 'Deluxe' | 'Premium',
            Description: description,
            ingredients: gridData.map((row) => ({
                ingredient: row.ingredient,
                portion: parseInt(row.portion),
                unit: row.unit,
                priceperunit: parseFloat(row.pricePerUnit),
            })),
        };

        onSubmit(updatedMenu);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-[#1E1E1E] bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-[#F1FCF1] p-6 rounded-3xl shadow-lg w-[700px] h-[828px] relative">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-10 text-gray-500 hover:text-gray-700 text-xl"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#386C5F" />
                    </svg>
                </button>
                <div className="text-[#066426] text-3xl font-medium justify-self-center mt-5 mb-12">
                    Edit Menu Information
                </div>
                <div className='text-[#066426]'>
                    <div className='w-[341px] justify-self-center flex justify-between items-center mb-4 '>
                        <div className=''>
                            Menu Name
                        </div>
                        <input
                            type="text"
                            className="w-[215px] h-[40px] rounded-2xl border border-[#47C171] pl-3 outline-none"
                            value={nameMenu}
                            onChange={(e) => setNameMenu(e.target.value)}
                        />
                    </div>
                    <div className='w-[341px] justify-self-center flex justify-between items-center mb-4'>
                        <div className=''>
                            Description
                        </div>
                        <textarea
                            className="w-[215px] h-[40px] rounded-2xl border border-[#47C171] pl-3 outline-none"
                            style={{ overflow: 'hidden', minHeight: '40px' }}
                            value={description}
                            onChange={handleResize}
                        />
                    </div>
                    <div className='w-[341px] justify-self-center flex justify-between items-center mb-4'>
                        <div className=''>
                            Menu image
                        </div>
                        <label className="file-input-container ">
                            <span className="file-name">{fileName}</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.5958 16.0208 10.7875 16.2125C10.9792 16.4042 11.2167 16.5 11.5 16.5C11.7833 16.5 12.0208 16.4042 12.2125 16.2125C12.4042 16.0208 12.5 15.7833 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z"
                                    fill="#066426"
                                />
                            </svg>
                            <input type="file" onChange={handleFileChange} />
                        </label>
                    </div>

                    <div className="w-[341px] justify-self-center flex justify-between items-center mb-4 ">
                        <div className="">Package</div>
                        <select
                            className="w-[215px] h-[40px] rounded-2xl border border-[#47C171] pl-3 outline-none"
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                        >
                            <option value="" hidden></option>
                            <option value="Basic">Basic</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>

                    <div className="w-[341px] justify-self-center flex justify-between items-center mb-4">
                        <div className="">Add Ingredient</div>
                        <select
                            className="w-[215px] h-[40px] rounded-2xl border border-[#47C171] pl-3 outline-none"
                            value={ingredient}
                            onChange={(e) => {
                                setIngredient(e.target.value);
                                const selectedIndex = ingredientList.findIndex((ingredient) => ingredient.ingredientName === e.target.value);
                                setUnit(ingredientList[selectedIndex].unit);
                                setPricePerUnit(ingredientList[selectedIndex].pricePerUnit);
                            }}
                        >
                            <option value="" hidden></option>
                            {ingredientList.map((ingredient, index) => (
                                <option key={index} value={ingredient.ingredientName}>
                                    {ingredient.ingredientName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='w-[341px] justify-self-center flex justify-between items-center mb-4'>
                        <div className=''>Portion</div>
                        <input
                            type="text"
                            className="w-[215px] h-[40px] rounded-2xl border border-[#47C171] pl-3 outline-none"
                            value={portion}
                            onChange={(e) => setPortion(e.target.value)}
                        />
                    </div>
                    <img
                        src={addcircle}
                        alt=""
                        className='w-[25px] h-[25px] cursor-pointer justify-self-center'
                        onClick={handleAddToGrid}
                    />
                </div>
                <div className='w-[500px] grid grid-cols-4 mb-2 font-medium justify-self-center text-[#386C5F]'>
                    <div className='col-span-2'>Ingredient</div>
                    <div className=''>Portion</div>
                    <div className=''>Unit</div>
                </div>
                <div className='overflow-y-auto max-h-[200px] custom-scrollbarIngredient'>
                    {gridData.map((row, index) => (
                        <div key={index} className='w-[500px] grid grid-cols-4 mb-2 justify-self-center text-[#386C5F]'>
                            <div className='col-span-2'>{row.ingredient}</div>
                            <div className=''>{row.portion}</div>
                            <div className='flex justify-between'>
                                <div className=''>{row.unit}</div>
                                <img src={trash} alt="" className='w-[25px] h-[25px] cursor-pointer' onClick={() => handleDeleteRow(index)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="justify-self-center">
                    <button className="mt-6 w-[134px] h-[48px] bg-[#30E06C] text-[#1E1E1E] py-2 rounded-full hover:bg-white hover:text-[#066426] hover:border hover:border-[#30E06C]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalEditMenu;