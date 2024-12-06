import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen cursor-pointer" onClick={handleClick}>
      <div className="text-[144px] font-bold">Who’s hungry?</div>
    </div>
  )
}

export default Home
