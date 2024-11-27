import { useState } from 'react'
import ButtonLink from '../../components/button/ButtonLink'
import LogoYai from '../../assets/images/LogoYai.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navitgate = useNavigate()
  const handleSubmit = () => {
    const payload = { email, password }
    console.log('Payload:', payload) // Log payload

    axios
      .post('http://localhost:8080/api/auth/login', payload, {
        withCredentials: true,
      })
      .then((response) => {
        console.log('Login successful:', response.data)
        navitgate('/')
      })
      .catch((error) => {
        console.error('Login failed:', error.response?.data || error.message)
      })
  }

  return (
    <div className="bg-[#386C5F] min-h-screen flex justify-center items-center">
      <div className="bg-[#F1FCF1] mx-24 w-[490px] h-[555px] justify-center items-center rounded-3xl">
        <div className="flex justify-center items-center mt-6">
          <img src={LogoYai} alt="Logo" width="305" height="100" />
        </div>
        <div className="mt-8 items-center">
          <div className="text-topic ml-16">Email</div>
          <div className="flex justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white w-[386px] h-[52px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
          </div>
        </div>
        <div className="text-topic ml-16 mt-4">Password</div>
        <div className="flex justify-center mb-10">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white w-[386px] h-[52px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />
        </div>
        <div className="flex items-center justify-center" onClick={handleSubmit}>
          <button className="w-[175px] h-[48px] mb-5 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center">
            เข้าสู่ระบบ
          </button>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLink
            label="ลงทะเบียน"
            link="/register"
            className="w-[175px] h-[48px] mb-5 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
