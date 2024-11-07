import { useState } from 'react'
import ButtonLink from '../components/button/ButtonLink'
import basicfood from '../assets/images/basic-food.svg'
import premiumfood from '../assets/images/premium-food.svg'
import deluxefood from '../assets/images/deluxe-food.svg'
import crownlogo from '../assets/images/crown-logo.svg'
import diamondlogo from '../assets/images/diamond-logo.svg'
import ricelogo from '../assets/images/rice-logo.svg'

const Home = () => {
  return (
    <div>
      <div className="mx-4 md:mx-40 lg:mx-40">
        <div className="text-topic font-sans font-bold text-[54px] mt-5 mx-24">ขอต้อนรับเข้าสู่ GraDex</div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="self-center font-sans font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <ButtonLink
          label={'สมัครเลย !'}
          link={''}
          className={`w-[120px] h-[40px] text-[16px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
        />
      </div>

      <div className="mx-4 md:mx-40 lg:mx-40">
        <div className="text-topic font-sans font-bold text-[48px] mt-5 mx-24">Package ของเรา</div>
      </div>
      <div className="flex items-center justify-center mx-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-10">
          <div className="bg-[#F1FCF1] p-4 rounded-lg">
            <div className="flex items-center justify-center mt-3">
              <img src={basicfood} alt="Logo" width="100" height="100" />
            </div>
            <div className="flex items-center justify-center text-[25px] font-bold text-topic mt-3">
              Basic
              <img src={ricelogo} alt="Logo" width="24" height="24" className="ml-2" />
            </div>
            <div className="text-[13px] text-center font-bold flex items-center justify-center mt-5">
              ทุกเมนูอาหารที่มีราคาไม่เกิน 80 บาท <br />
              อิ่มอร่อยง่าย แถมมีประโยชน์ <br />
              เหมาะกับลูกค้าทุกคน
            </div>
            <div className="flex items-center justify-center mx-20 mt-10">
              <ButtonLink
                label={'180 บาท/เดือน'}
                link={''}
                className={`w-[120px] h-[40px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
          <div className="bg-[#F1FCF1] p-4 rounded-lg">
            <div className="flex items-center justify-center mt-3">
              <img src={deluxefood} alt="Logo" width="100" height="100" />
            </div>
            <div className="flex items-center justify-center text-[25px] font-bold text-topic mt-3">
              Deluxe
              <img src={diamondlogo} alt="Logo" width="24" height="24" className="ml-2" />
            </div>
            <div className="text-[13px] text-center font-bold flex items-center justify-center mt-5">
              ทุกเมนูอาหารที่มีราคาไม่เกิน 150 บาท <br />
              ปลดล็อคจานโปรดแบบใหม่ <br />
              ให้กับทุกคนได้ทานอย่างมีความสุข
            </div>
            <div className="flex items-center justify-center mx-20 mt-10">
              <ButtonLink
                label={'250 บาท/เดือน'}
                link={''}
                className={`w-[120px] h-[40px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
          <div className="bg-[#F1FCF1] p-4 rounded-lg">
            <div className="flex items-center justify-center mt-3">
              <img src={premiumfood} alt="Logo" width="100" height="100" />
            </div>
            <div className="flex items-center justify-center text-[25px] font-bold text-topic mt-3">
              Premium
              <img src={crownlogo} alt="Logo" width="24" height="24" className="ml-2" />
            </div>
            <div className="text-[13px] text-center font-bold flex items-center justify-center mt-5">
              ปลดล็อกทุกเมนูอาหารจานโปรดของคุณ <br />
              เพื่อให้คุณได้เข้าถึงเมนูที่มีประโยชน์
              <br />
              ทุกจาน
            </div>
            <div className="flex items-center justify-center mx-20 mt-10">
              <ButtonLink
                label={'350 บาท/เดือน'}
                link={''}
                className={`w-[120px] h-[40px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
