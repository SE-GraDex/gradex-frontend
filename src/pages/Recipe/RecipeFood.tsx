import line from '../../assets/images/Line 2.svg'
import premiumfood from '../../assets/images/premium-food.svg'
import ricelogo from '../../assets/images/rice-logo.svg'
import video from '../../assets/images/video.svg'

const Home = () => {
  return (
    <div className="ml-60 mt-20">
      <div className="flex">
        <div className="mr-40">
          <img src={premiumfood} alt="Logo" width="360" height="360" className="" />
          <div className="ml-8 mt-8">
            <div className="text-topic font-bold text-[40px] mb-4">Ingredient</div>
            <div className="text-topic text-[20px]">King Salmon</div>
            <div className="text-topic text-[20px]">Broccoli</div>
            <div className="text-topic text-[20px]">Lemon</div>
          </div>
        </div>
        <div>
          <div className="text-topic font-bold text-[64px]">Steak Salmon</div>
          <div className="flex">
            <img src={ricelogo} alt="Logo" width="55" height="55" className="mr-4" />
            <div className="text-[25px] text-topic font-bold my-auto">Basic</div>
          </div>
          <div className="w-[800px] mt-10 font-bold text-topic text-[20px]">
            "Steak salmon" refers to a specific cut of salmon where the fish is sliced crosswise through the bone,
            creating thick, round portions with a portion of the spine in the center. Unlike fillets, which are
            typically boneless and cut lengthwise along the side of the fish, salmon steaks are typically larger,
            heartier portions, and are often thicker and more uniform in shape.
          </div>
          <img src={line} width="594" className="mt-10" />
          <div className="text-topic font-bold text-[40px] mt-6">How to cook</div>
          <img src={video} alt="video" width="440" height="246" className="mt-6" />
        </div>
      </div>
    </div>
  )
}

export default Home
