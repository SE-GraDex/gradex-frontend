import React, { useState } from 'react'

// กำหนด type สำหรับ props ของ modal
interface MealPrepModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (newIngredient: FormData) => void // เพิ่มฟังก์ชัน onSubmit สำหรับการส่งข้อมูลกลับ
}

// กำหนด type สำหรับ form data
interface FormData {
  ingredientName: string
  pricePerUnit: string
  unit: string
}

const Modallngred: React.FC<MealPrepModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    ingredientName: '',
    pricePerUnit: '',
    unit: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  }

  const handleSubmit = () => {
    onSubmit(formData)
    onClose()
  }

  const inputFields: { label: string; field: keyof FormData }[] = [
    { label: 'Ingredient Name', field: 'ingredientName' },
    { label: 'Price / Unit', field: 'pricePerUnit' },
    { label: 'Unit', field: 'unit' },
  ]
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-[#1E1E1E] bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-[#F1FCF1] p-6 rounded-3xl shadow-lg w-[700px] h-[423px] relative">
        <button onClick={onClose} className="absolute top-5 right-10 text-gray-500 hover:text-gray-700 text-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="#386C5F"
            />
          </svg>
        </button>
        <div className="text-[#066426] text-3xl font-medium justify-self-center mt-5 mb-12">Assign New Information</div>

        {inputFields.map((input, index) => (
          <div
            key={index}
            className="w-[365px] h-[40px] text-[#066426] flex justify-between items-center justify-self-center font-medium mb-5"
          >
            <div>{input.label}</div>
            <input
              type="text"
              className="w-[215px] h-[40px] border border-[#47C171] rounded-xl pl-3 outline-none"
              value={formData[input.field]}
              onChange={(e) => handleChange(e, input.field)}
            />
          </div>
        ))}
        <div className="justify-self-center">
          <button
            onClick={handleSubmit}
            className="mt-6 w-[134px] h-[48px] bg-[#30E06C] text-[#1E1E1E] py-2 rounded-full hover:bg-white hover:text-[#066426] hover:border hover:border-[#30E06C]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modallngred
