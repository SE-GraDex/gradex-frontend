import React from 'react'
import CardTemp from './CardTemp'
import ImageSlider from './ImageSlider'
import bowlrice from '@/assets/images/imagesForMealPre/bowl-rice.svg'
import { useState, useEffect } from 'react'
import { MonthlyDays, IngredientsData, Ingredient } from '@/interface/global.types'
import MealPrepModal from './MealPrepModal'
import axios from 'axios'
import { axiosInstance } from '@/utils/Axios'

export interface MenuItem {
  name: string
  image: string
  PackageName: 'Basic' | 'Deluxe' | 'Premium'
  Description?: string
  ingredients: Ingredient[]
}

const removeParentheses = (input: string) => {
  return input.replace(/\(.*?\)/g, '').trim()
}

// console.log(ingredientsData);

interface MunuSelectorCardProps {
  DateCurrent: Date | null
  parentsMonth: MonthlyDays
  setSelectedMonths: React.Dispatch<React.SetStateAction<MonthlyDays>>
  toggle: (toggle: boolean) => void
}

const MenuSelectorCard: React.FC<MunuSelectorCardProps> = ({
  DateCurrent,
  parentsMonth,
  setSelectedMonths,
  toggle,
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const [isMenuSelected, setIsMenuSelected] = useState<string>('')
  const [menuItemsTest, setmenuItemTest] = useState<MenuItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // Open the modal
  const openPopUp = () => setIsPopUpOpen(true)

  // Close the modal and handle the submission logic
  const closePopUp = () => {
    setIsPopUpOpen(false)
    handleSummit()
  }

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axiosInstance.get('/api/menu/getMenus')
        // console.log(response.data);
        // console.log("response", response.data);
        const mappedMenus: MenuItem[] = response.data.map((item: any) => ({
          name: item.menu_title,
          image: item.menu_image,
          PackageName: item.package,
          Description: item.menu_description,
          ingredients: [
            item.ingredient_list.map((ingredient: any) => ({
              ingredient: ingredient.name,
              portion: ingredient.portion,
              unit: ingredient.unit,
              priceperunit: ingredient.priceperunit,
            })),
          ],
        }))
        // console.log("Test mapp menny", mappedMenus);
        setmenuItemTest(mappedMenus)
        setIsLoading(false)
        // console.log('this ->',mappedMenus[0]);
      } catch (err) {
        console.log('Error fetching menu data', err)
      }
    }

    fetchMenus()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  const ingredientsData: IngredientsData = menuItemsTest.reduce<IngredientsData>((acc, item) => {
    acc[item.name] = item.ingredients
    return acc
  }, {})

  // console.log("IngredientsData", ingredientsData);

  const handleSummit = () => {
    if (DateCurrent) {
      const yourDayValue: number = DateCurrent.getDate()
      const monthKey = DateCurrent.getMonth().toString() as keyof MonthlyDays
      const index: number = parentsMonth[monthKey].findIndex((item) => item && item.day === yourDayValue)
      if (index !== -1 && parentsMonth[monthKey][index]) {
        setSelectedMonths((prevMonths) => {
          const updatedMonths = { ...prevMonths }
          updatedMonths[monthKey][index]!.detail = { [isMenuSelected]: ingredientsData[isMenuSelected] }
          updatedMonths[monthKey][index]!.status = 1
          return updatedMonths
        })
      }
    }
    toggle(false) // Close the modal card after submitting
  }

  const handleMenuSelect = (menuName: string) => {
    const index: number = menuItemsTest.findIndex((item) => item.name === menuName)
    const menu = { name: menuName, PackageName: menuItemsTest[index].PackageName, image: menuItemsTest[index].image }
    return menu
  }

  const getImg = (menuName: string) => {
    const index: number = menuItemsTest.findIndex((item) => item.name === menuName)
    console.log('this -> index', menuItemsTest)
    return menuItemsTest[index].image
    // return "";
  }

  return (
    <div className="flex flex-col space-y-8 mb-2">
      <ImageSlider Toggle={setIsMenuSelected} />
      {isMenuSelected === '' ? (
        <CardTemp Height={'375'} Width={'617'} />
      ) : (
        <div className="w-[617px] h-[475px] bg-[#47C171] rounded-3xl ">
          <div className="flex w-[467px] h-[120px] justify-self-center space-x-10">
            <img className="w-[125px] h-[125px] mt-5 rounded-full" src={getImg(isMenuSelected)} alt="Salmon steak" />
            <div className="flex flex-col">
              <div className="text-white justify-self-center text-2xl mt-5 mb-3">Select menu</div>
              <div className="flex">
                <div className="h-[28px] w-[150px] bg-white text-xs text-[#A9A2A2] rounded-l-md flex items-center justify-start pl-2">
                  {/* Display selected menu name */}
                  {removeParentheses(isMenuSelected)}
                </div>
                <div className="w-[56px] h-[28px] bg-[#30E06C] rounded-r-3xl">
                  <img className="w-[25px] h-[25px] justify-self-center" src={bowlrice} alt="" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-white text-2xl font-semibold mb-2 text-center">Ingredient report</h3>
          <div className="w-[467px] h-[2px] bg-white justify-self-center"></div>
          <div className="grid grid-cols-3 gap-1 overflow-y-auto max-h-[230px] custom-scrollbarIngredient text-white text-lg justify-self-center justify-between text-center w-[467px]">
            <div className="font-medium text-start">Ingredient</div>
            <div className="font-medium">Portion</div>
            <div className="font-medium">Unit</div>

            {ingredientsData[isMenuSelected] && Array.isArray(ingredientsData[isMenuSelected]) ? (
              ingredientsData[isMenuSelected].map((item, index) => {
                if (Array.isArray(item)) {
                  return item.map((subItem, subIndex) => (
                    <React.Fragment key={`${index}-${subIndex}`}>
                      <div className="text-start">{subItem.ingredient || 'No ingredient found'}</div>
                      <div>{subItem.portion || 'No portion provided'}</div>
                      <div>{subItem.unit || 'No unit specified'}</div>
                    </React.Fragment>
                  ))
                } else {
                  return (
                    <React.Fragment key={index}>
                      <div className="text-start">{item.ingredient || 'No ingredient found'}</div>
                      <div>{item.portion || 'No portion provided'}</div>
                      <div>{item.unit || 'No unit specified'}</div>
                    </React.Fragment>
                  )
                }
              })
            ) : (
              <div>No ingredients available for the selected menu.</div>
            )}
          </div>
          <div className="w-[467px] h-[2px] bg-white justify-self-center"></div>

          <div
            className="w-[134px] h-[48px] bg-[#1E1E1E] text-white justify-self-center text-lg rounded-3xl flex items-center justify-center mt-5 hover:bg-white hover:text-black hover:border hover:border-black hover:cursor-pointer"
            onClick={() => {
              const index = menuItemsTest.findIndex((item) => item.name === isMenuSelected)
              // console.log(DateCurrent, menuItemsTest[index]);
              console.log(menuItemsTest, index)
              const tmp = {
                date: DateCurrent?.toISOString(),
                menu_image: menuItemsTest[index].image,
                menu_title: menuItemsTest[index].name,
                menu_description: menuItemsTest[index].Description,
                ingredient_list: menuItemsTest[index].ingredients.flatMap((item: any) => {
                  // flatMap to flatten one level
                  return item.map((subItem: Ingredient) => {
                    // subItem is an Ingredient object
                    return {
                      name: subItem.ingredient,
                      priceperunit: subItem.priceperunit ? subItem.priceperunit : 0,
                      portion: subItem.portion,
                      unit: subItem.unit,
                    }
                  })
                }),
                status: 1,
                package_name: menuItemsTest[index].PackageName,
              }
              console.log('tmp', tmp)
              // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
              // console.log("Current Timezone:", timezone);
              // console.log("Time:", DateCurrent);
              // menuItemsTest[index].ingredients.map((item, subIndex) => {
              //         return item.map((subItem, subSubIndex) => {
              //                 return {
              //                         hell: subItem,  // This would refer to the sub-item
              //                         ingredient: subItem.ingredient,
              //                         priceperunit: subItem.priceperunit ? subItem.priceperunit : 0,
              //                         portion: subItem.portion,
              //                         unit: subItem.unit,
              //                     };
              //                 });
              //             }););
              //             console.log(menuItemsTest[index]);
              async function addDailyOrder() {
                if (!tmp || Object.keys(tmp).length === 0) {
                  console.error('No order data to send')
                  return
                }

                try {
                  const response = await axiosInstance.post(
                    '/api/user/addDailyOrder',
                    tmp, // ข้อมูลที่จะส่ง
                    { withCredentials: true }, // การตั้งค่าเพิ่มเติม
                  )
                  // Log or handle the response data
                  console.log('Order added successfully:', response.data)
                  // Optionally update UI or state with the response
                } catch (error) {
                  if (axios.isAxiosError(error)) {
                    // Handle Axios-specific errors
                    console.error('Error adding order:', error.response?.data || error.message)
                  } else {
                    // Handle other types of errors
                    console.error('Unexpected error:', error)
                  }
                }
              }

              addDailyOrder()

              openPopUp()
            }} // Open the modal first
          >
            Submit
          </div>

          {/* Modal rendering */}
          {isPopUpOpen && (
            <MealPrepModal isOpen={isPopUpOpen} onClose={closePopUp} menu={handleMenuSelect(isMenuSelected)} />
          )}
        </div>
      )}
    </div>
  )
}

export default MenuSelectorCard
