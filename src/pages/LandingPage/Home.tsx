import { packageDetail } from '../../interface/global.types';
import ButtonLink from '../../components/button/ButtonLink';
import basicfood from '../../assets/images/basic-food.svg';
import premiumfood from '../../assets/images/premium-food.svg';
import deluxefood from '../../assets/images/deluxe-food.svg';
import crownlogo from '../../assets/images/crown-logo.svg';
import diamondlogo from '../../assets/images/diamond-logo.svg';
import ricelogo from '../../assets/images/rice-logo.svg';

const Home = () => {
  return (
    <div>
      <div className="mx-4 md:mx-40 lg:mx-40">
        <div className="text-topic font-sans font-bold text-[54px] mt-5 mx-24">ขอต้อนรับเข้าสู่ GraDex</div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="self-center font-sans font-bold">
          เพราะการทำอาหาร คือการปรุงรสชาติด้วยความรัก มอบกับคนที่แสนพิเศษ   ช่วงเวลาดีๆเหล่านี้จะเกิดขึ้นไม่ได้ หากขาดวัตถุดิบที่แสนพิเศษไป  ที่ GraDex เรามุ่งมั่นที่จะส่งต่อวัตถุดิบที่สดใหม่จากเกษตกรท้องถิ่น ส่งตรงถึงมือคุณ
          <br />
          เพื่อให้คุณใช้เวลาที่มีค่าในการทำอาหาร และแบ่งปันช่วงเวลาพิเศษร่วมกับคนที่คุณรัก "ปรุงอาหาร เติมรัก ส่งต่อความสุข ไปด้วยกันกับ GraDex"
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <ButtonLink
          label={'สมัครเลย !'}
          link={'/register'}
          className={`w-[120px] h-[40px] text-[16px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center font-light`}
        />
      </div>

      <div className="mx-4 md:mx-40 lg:mx-40">
        <div className="text-topic font-sans font-bold text-[48px] mt-5 mx-24">Package ของเรา</div>
      </div>

      <div className="flex items-center justify-center mx-60 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-10">
          {packageDetail.map((pkg, index) => (
            <div key={`${pkg.package_name}-${index}`} className="bg-[#F1FCF1] p-4 rounded-lg">
              <div className="flex items-center justify-center mt-3">
                {pkg.package_name === 'Basic' && <img src={basicfood} alt="Basic" width="100" height="100" />}
                {pkg.package_name === 'Deluxe' && <img src={deluxefood} alt="Deluxe" width="100" height="100" />}
                {pkg.package_name === 'Premium' && <img src={premiumfood} alt="Premium" width="100" height="100" />}
              </div>
              <div className="flex place-content-center text-[25px] font-bold text-topic mt-3">
                {pkg.package_name}
                {pkg.package_name === 'Basic' && <img src={ricelogo} alt="Logo" width="24" height="24" className="ml-2" />}
                {pkg.package_name === 'Deluxe' && <img src={diamondlogo} alt="Logo" width="24" height="24" className="ml-2" />}
                {pkg.package_name === 'Premium' && <img src={crownlogo} alt="Logo" width="24" height="24" className="ml-2" />}
              </div>
              <div className="text-[13px] text-center font-bold flex items-center justify-center mt-5">
                {pkg.features}
              </div>
              <div className="flex items-center justify-center mt-10">
                <ButtonLink
                  label={`${pkg.price} บาท/เดือน`}
                  link={''}
                  className={`w-[120px] h-[40px] mb-5 text-[12px] bg-black border border-black rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
