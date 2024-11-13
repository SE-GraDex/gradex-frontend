import { useState } from 'react'
import ButtonLink from '../../components/button/ButtonLink'
import LogoYai from '../../assets/images/LogoYai.svg'

const Home = () => {
  return (
    <div className="bg-[#386C5F] min-h-screen flex justify-center items-center">
      <div className="bg-[#F1FCF1] mx-24 w-[1048px] h-[792px] justify-center items-center rounded-3xl">
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
            type="Firstname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
          <input
            type="Lastname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
          <input
            type="Nickname"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-2 gap-80">
          <div className="text-topic">Email</div>
          <div className="text-topic ml-20">Password</div>
        </div>
        <div className="mx-24 flex grid-col-2 gap-12">
          <input
            type="Email"
            className="bg-white w-[386px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
          <input
            type="Password"
            className="bg-white w-[386px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-3 gap-40">
          <div className="text-topic">Address name</div>
          <div className="text-topic ml-12">Address unit number</div>
          <div className="text-topic">Street name</div>
        </div>
        <div className="mx-24 flex grid-col-3 gap-24">
          <input
            type="AddressName"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
          <input
            type="AddressUnit"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
            placeholder="Number Only"
          />
          <input
            type="StreetName"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-6 mx-24 flex grid-col-3 gap-60">
          <div className="text-topic">City</div>
          <div className="text-topic ml-12">Region</div>
          <div className="text-topic ml-6">Postal code</div>
        </div>
        <div className="mx-24 flex grid-col-3 gap-24">
            <input
              type="City"
              className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
            />
           <select
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" hidden></option>
            <option value="north">Northern</option>
            <option value="south">Southern</option>
            <option value="east">Central</option>
            <option value="west">Western</option>
            <option value="west">Eastern</option>
            <option value="west">Northeastern</option>
          </select>
          <input
            type="PostalCode"
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
            placeholder="Number Only"
          />
        </div>
        <div className="mx-80">
          <div className="text-topic flex justify-left mt-6 mx-24">Role</div>
          <div className='mx-20'>
          <select
            className="bg-white w-[215px] h-[44px] border border-[#47C171] text-[16px] mt-4 mx-2 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" hidden></option>
            <option value="customer">Customer</option>
            <option value="meal">Meal designer</option>
            <option value="messenger">Messenger</option>
          </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLink
            label="ลงทะเบียน"
            link=""
            className="w-[175px] h-[48px] my-10 text-[16px] bg-[#30E06C] border rounded-full text-black hover:bg-white hover:text-[#066426] hover:border-[#30E06C] transition-all duration-200 flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
