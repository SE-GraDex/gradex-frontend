import React, { useEffect, useState } from 'react';
import search from '../../../assets/images/search-sky.svg';
import pulscircle from '../../../assets/images/plus-circle.svg';
import edit from '../../../assets/images/Edit.svg';
import Modallngred from './Modallngred';
import ModallngredEdit from './ModallngredEdit';
import axios from 'axios';

interface FormData {
    ingredientName: string;
    pricePerUnit: string;
    unit: string;
}

const IngredientManagementPage: React.FC = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isPopUpOpenEdit, setIsPopUpOpenEdit] = useState(false);
    // const [ingredientList, setIngredientList] = useState<FormData[]>([
    //     { ingredientName: 'Pork', pricePerUnit: '0.2', unit: 'gram' },
    //     { ingredientName: 'Chicken', pricePerUnit: '0.15', unit: 'gram' },
    //     { ingredientName: 'Rice', pricePerUnit: '0.5', unit: 'kg' },
    //     { ingredientName: 'Tomato', pricePerUnit: '1.0', unit: 'kg' },
    //     { ingredientName: 'Lettuce', pricePerUnit: '0.3', unit: 'kg' },
    //     { ingredientName: 'Egg', pricePerUnit: '0.7', unit: 'unit' },
    //     { ingredientName: 'Garlic', pricePerUnit: '0.1', unit: 'gram' },
    //     { ingredientName: 'Carrot', pricePerUnit: '0.6', unit: 'kg' },
    //     { ingredientName: 'Onion', pricePerUnit: '0.2', unit: 'kg' },
    //     { ingredientName: 'Cucumber', pricePerUnit: '0.4', unit: 'kg' },
    // ]);
    const [ingredientList, setIngredientList] = useState<FormData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState<FormData | null>(null);
    // const [ingredientList, setIngredientList] = useState<FormData[]>([]);
    // const [searchQuery, setSearchQuery] = useState('');
    // const [selectedIngredient, setSelectedIngredient] = useState<FormData | null>(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/ingredient/getIngredients")
            .then((res) => {
                console.log(res.data);
                // const mappedData: FormData[] = res.data.map((item: any) => ({
                //     ingredientName: item.name,
                //     pricePerUnit: item.priceperunit ? item.priceperunit.toString() : '', // Check if priceperunit exists
                // }))
                const mappedData: FormData[] = res.data.map((item: any) => ({
                    ingredientName: item.name,
                    pricePerUnit: item.priceperunit.toString(),
                    unit: item.unit,
                }))
                setIngredientList(mappedData);
                setIsLoading(false)
            })
        // .catch((err: any) => {
        //     console.log("Error occurs", err)
        // })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const openPopUpEdit = (ingredient: FormData) => {
        setSelectedIngredient(ingredient);
        setIsPopUpOpenEdit(true);
    };

    const closePopUpEdit = () => {
        setIsPopUpOpenEdit(false);
        setSelectedIngredient(null);
    };

    const handleNewIngredient = (newIngredient: FormData) => {
        axios
            .post("http://localhost:8080/api/ingredient/createIngredient",
                {
                    name: newIngredient.ingredientName,
                    priceperunit: Number(newIngredient.pricePerUnit),
                    unit: newIngredient.unit
                }
            )
            .then((res) => {
                console.log("Ingredient created successfully:", res.data);
                // Add the new ingredient to the state
                setIngredientList((prevList) => [...prevList, newIngredient]);
            })
            .catch((err: any) => {
                console.error("Error creating ingredient:", err);
            });
    };

    const handleDeleteIngredient = (ingredientName: string) => {
        axios
            .delete(`http://localhost:8080/api/ingredient/deleteIngredient/${ingredientName}`)
            .then((res) => {
                console.log(res);
                setIngredientList((prevList) => prevList.filter((ingredient) => ingredient.ingredientName !== ingredientName));
            })
            .catch((err: any) => {
                console.log(err);
            })
    };

    const filteredIngredients = ingredientList.filter((ingredient) =>
        ingredient.ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center bg-[#85bdbf] min-h-screen py-8">
            <h1 className="text-5xl font-semibold mb-4 text-white jsu">Ingredient Management</h1>
            <div className="mb-6 text-center">
                <label className="block font-medium text-white justify-self-start text-sm">Search Ingredient</label>
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
            <div className='w-[573px] flex justify-start'>
                <div className="text-center text-white mb-4">Total Ingredient: {filteredIngredients.length}</div>
            </div>

            <div className="w-[573px] grid grid-cols-3 gap-2 text-center font-semibold mb-2 text-[#386C5F]">
                <div className="w-[158px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center">Ingredient</div>
                <div className="w-[165px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center">Price / Unit</div>
                <div className="flex justify-self-end gap-2">
                    <div className="w-[112px] h-[48px] bg-[#F3FFF9] rounded-full flex justify-center items-center">Unit</div>
                    <div className="flex justify-center items-center hover:cursor-pointer" onClick={() => setIsPopUpOpen(true)}>
                        <img src={pulscircle} className="w-[25px] h-[25px]" alt="Plus Circle" />
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto max-h-[300px] rounded-lg p-2 custom-scrollbarIngredient">
                {filteredIngredients.map((ingredient, index) => (
                    <div key={index} className="w-[590px] grid grid-cols-3 gap-2 text-center items-center mb-2 text-[#f0f0f0] text-lg">
                        <div className="w-[195px] h-[48px] flex justify-center items-center">{ingredient.ingredientName}</div>
                        <div className="w-[165px] h-[48px] flex justify-center items-center justify-self-center">{ingredient.pricePerUnit}</div>
                        <div className="flex justify-self-end gap-2">
                            <div className="w-[112px] h-[48px] flex justify-center items-center px-2 justify-self-end">{ingredient.unit}</div>
                            <div className="flex justify-center items-center hover:cursor-pointer" onClick={() => openPopUpEdit(ingredient)}>
                                <img src={edit} className="w-[25px] h-[25px]" alt="Edit" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isPopUpOpen && <Modallngred isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} onSubmit={handleNewIngredient} />}
            {isPopUpOpenEdit && selectedIngredient && (
                <ModallngredEdit
                    isOpen={isPopUpOpenEdit}
                    onClose={closePopUpEdit}
                    onSubmit={(updatedIngredient) => {
                        console.log(updatedIngredient);
                        setIngredientList((prevList) =>
                            prevList.map((ingredient) =>
                                ingredient.ingredientName === selectedIngredient.ingredientName
                                    ? updatedIngredient
                                    : ingredient
                            )
                        );
                        axios.put(`http://localhost:8080/api/ingredient/updateIngredient/${selectedIngredient.ingredientName}`,
                            {
                                name: updatedIngredient.ingredientName,
                                priceperunit: Number(updatedIngredient.pricePerUnit),
                                unit: updatedIngredient.unit
                            })
                            .then((res) => {
                                console.log(res);
                            })
                            .catch((err: any) => {
                                console.log(err);
                            })
                        closePopUpEdit();
                    }}
                    onDelete={handleDeleteIngredient}
                    ingredientData={selectedIngredient}
                />
            )}
        </div>
    );
};



export default IngredientManagementPage;