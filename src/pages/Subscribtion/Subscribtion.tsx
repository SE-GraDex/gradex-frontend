import { useNavigate } from 'react-router-dom'
import check from '../../assets/images/Check.svg'
import ButtonLink from '../../components/button/ButtonLink'

const Subscription = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="justify-self-center text-[48px] text-topic font-bold">Subscription</div>
        <div className="justify-self-center text-[20px] text-topic font-bold">
          Choose between Our Basic Package , Deluxe Package ,and Premium Package
        </div>
      </div>
      <div className="justify-self-center flex">
        <div className='mt-16 w-[480px] h-[400px] bg-[#F1FCF1] rounded-l-3xl'>
          <div className="justify-self-center text-[24px] font-medium my-2">ค่าใช้จ่ายรายเดือน</div>
          <div className="justify-self-center text-[24px] font-medium my-2">รายการอาหารให้เลือก xx เมนู</div>
          <div className="justify-self-center text-[24px] font-medium my-2">รายการอาหารให้เลือก xxx เมนู</div>
          <div className="justify-self-center text-[24px] font-medium my-2">ปลดล็อกเมนูอาหารทั้งหมด</div>
        </div>
        <div className="grid-cols-3 flex mt-6">
          <div className='bg-[#7BB3B5] w-[125px] h-[440px] rounded-tl-3xl'>
            <div className='justify-self-center text-[24px] text-white font-bold mt-2'>Basic</div>
            <div className='justify-self-center text-[20px] font-medium my-2 text-white'>180 Bath</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-4' />
            <div className='justify-self-center text-[20px] font-medium mt-6 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className='justify-self-center text-[20px] font-medium mt-6 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className="flex items-center justify-center mt-48">
              <ButtonLink
                label={'Buy Basic'}
                link={'/all-payment'}
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
          <div className='bg-[#5E8D97] w-[125px] h-[440px]'>
            <div className='justify-self-center text-[24px] text-white font-bold mt-2'>Deluxe</div>
            <div className='justify-self-center text-[20px] font-medium my-2 text-white'>250 Bath</div>
            <div className='justify-self-center text-[20px] font-medium mt-4 text-white w-[20px] h-[20px] text-center'>-</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-6' />
            <div className='justify-self-center text-[20px] font-medium mt-6 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className="flex items-center justify-center mt-48">
              <ButtonLink
                label={'Buy Deluxe'}
                link={'/all-payment'}
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
          <div className='bg-[#456A78] w-[125px] h-[440px] rounded-r-3xl'>
            <div className='justify-self-center text-[24px] text-[#F4D294] font-bold mt-2'>Premium</div>
            <div className='justify-self-center text-[20px] font-medium my-2 text-white'>350 Bath</div>
            <div className='justify-self-center text-[20px] font-medium mt-4 text-white w-[20px] h-[20px] text-center'>-</div>
            <div className='justify-self-center text-[20px] font-medium mt-6 text-white w-[20px] h-[20px] text-center'>-</div>
            <img src={check} alt="Logo" width="20" height="20" className='justify-self-center mt-6' />
            <div className="flex items-center justify-center mt-48">
              <ButtonLink
                label={'Buy Premium'}
                link={'/all-payment'}
                className={`w-[112px] h-[34px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription