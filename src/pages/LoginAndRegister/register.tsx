import { useState } from 'react'
import LogoYai from '../../assets/images/LogoYai.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
    addressName: '',
    addressUnitNumber: '',
    streetNumber: '',
    city: '',
    region: '',
    postalCode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: form }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Registration successful
      } else {
        alert(data.message); // Display backend error message
      }
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };


  return (
    <div className="bg-[#386C5F] min-h-screen flex justify-center items-center">
      <div className="bg-[#F1FCF1] mx-24 w-[1048px] h-[692px] justify-center items-center rounded-3xl">
        <div className="flex justify-center items-center mt-6">
          <img src={LogoYai} alt="Logo" width="305" height="100" />
        </div>
        <div className="mt-10 mx-24 flex grid-col-3 gap-60">
          <div className="text-topic">Firstname</div>
          <div className="text-topic">Lastname</div>
          <div className="text-topic">Nickname</div>
        </div>
        <div className="mx-24 flex grid-col-3 gap-24">
          <input
            name="firstname"
            type="Firstname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.firstname}
            onChange={handleChange}
          />
          <input
            name="lastname"
            type="Lastname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.lastname}
            onChange={handleChange}
          />
          <input
            name="nickname"
            type="Nickname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.nickname}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-2 gap-80">
          <div className="text-topic">Email</div>
          <div className="text-topic ml-20">Password</div>
        </div>
        <div className="mx-24 flex grid-col-2 gap-12">
          <input
            name="email"
            type="Email"
            className="bg-white w-[386px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="Password"
            className="bg-white w-[386px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-3 gap-40">
          <div className="text-topic">Address name</div>
          <div className="text-topic ml-12">Address unit number</div>
          <div className="text-topic">Street name</div>
        </div>
        <div className="mx-24 flex grid-col-3 gap-24">
          <input
            name="addressName"
            type="AddressName"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.addressName}
            onChange={handleChange}
          />
          <input
            name="addressUnitNumber"
            type="AddressUnit"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            placeholder="Number Only"
            value={form.addressUnitNumber}
            onChange={handleChange}
          />
          <input
            name="streetNumber"
            type="StreetName"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.streetNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-3 gap-60">
          <div className="text-topic">City</div>
          <div className="text-topic ml-12">Region</div>
          <div className="text-topic ml-6">Postal code</div>
        </div>
        <div className="mx-24 flex grid-col-3 gap-24">
          <input
            name="city"
            type="City"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            value={form.city}
            onChange={handleChange}
          />
          <select
            name="region"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            value={form.region}
            onChange={handleChange}
          >
            <option value="" hidden></option>
            <option value="north">Northern</option>
            <option value="south">Southern</option>
            <option value="central">Central</option>
            <option value="west">Western</option>
            <option value="east">Eastern</option>
            <option value="northeast">Northeastern</option>
          </select>
          <input
            name="postalCode"
            type="PostalCode"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:border-blue-500"
            placeholder="Number Only"
            value={form.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-[175px] h-[48px] my-10 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
