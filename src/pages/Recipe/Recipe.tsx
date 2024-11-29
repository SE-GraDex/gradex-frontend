import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import search from '../../assets/images/Search.svg'
import Loading from '@/components/Loading'

interface IMenu {
  menu_title: string
  menu_description: string
  ingredient_list: {
    ingredientId: IIngredient
    portion: number
  }[]
  package: 'Basic' | 'Deluxe' | 'Premium'
  menu_image: string
}

interface IIngredient {
  name: string
  pricePerUnit: number
  unit: string
}

const Recipe = () => {
  const [food, setFood] = useState<IMenu[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/menu/getMenus')
        setFood(response.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMenus()
  }, [])

  const filteredFood = food.filter((item) => item.menu_title.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleClick = (item: IMenu) => {
    console.log(item)
    navigate('/recipe-food', { state: item })
  }

  if (loading) return <Loading />

  return (
    <div>
      <div className="text-topic text-[64px] font-bold ml-80 mt-16">Recipe Book</div>
      <div className="flex mt-6 ml-80">
        <input
          type="text"
          className="bg-white w-[280px] border border-primary text-gray-900 text-[20px] rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder="Search menu"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="bg-primary w-[95px] rounded-r-full flex justify-center items-center">
          <button>
            <img src={search} alt="search" width="25" height="25" />
          </button>
        </div>
      </div>
      <div className="mx-80 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto mt-5">
          {filteredFood.length > 0 ? (
            filteredFood.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-center mt-3 cursor-pointer">
                  <img
                    src={item.menu_image}
                    alt={item.menu_title}
                    width="145"
                    height="145"
                    onClick={() => handleClick(item)}
                    className="rounded-full w-[145px] h-[145px] flex-shrink-0 hover:scale-110 duration-100"
                  />
                </div>
                <div className="flex items-center justify-center text-2xl text-center font-bold text-topic mt-3">
                  {item.menu_title}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-[20px] font-bold">No items found</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Recipe
