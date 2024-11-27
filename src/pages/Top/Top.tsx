import { useEffect, useState } from 'react';
import axios from 'axios';
import crownlogo from '../../assets/images/crown-logo.svg';
import diamondlogo from '../../assets/images/diamond-logo.svg';
import premiumfood from '../../assets/images/premium-food.svg';
import basicfood from '../../assets/images/basic-food.svg';
import deluxefood from '../../assets/images/deluxe-food.svg';
import ricelogo from '../../assets/images/rice-logo.svg';
import Modal from '../../components/ModalMeal';

interface MenuItem {
  food: string;
  logo: string;
  image: string;
  content: string;
}

interface GroupedMenus {
  Basic: MenuItem[];
  Deluxe: MenuItem[];
  Premium: MenuItem[];
}

interface HomeProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [modalContent, setModalContent] = useState<string>('');
  const [modalType, setModalType] = useState<string>('');
  const [modalLogo, setModalLogo] = useState<string>('');
  const [modalFood, setModalFood] = useState<string>('');
  const [modalFoodLogo, setModalFoodLogo] = useState<string>('');
  const [groupedMenus, setGroupedMenus] = useState<GroupedMenus>({
    Basic: [],
    Deluxe: [],
    Premium: [],
  });

  const openModal = (content: string, type: string, logo: string, food: string, foodLogo: string) => {
    setModalContent(content);
    setModalType(type);
    setModalLogo(logo);
    setModalFood(food);
    setIsModalOpen(true);
    setModalFoodLogo(foodLogo);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchTopMenus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dailyorderlist/getTopThreeOrders');
        const grouped: GroupedMenus = { Basic: [], Deluxe: [], Premium: [] };

        response.data.menus.forEach((menu: any) => {
          const packageType = menu.package; // Package type
          const logo =
            packageType === 'Basic'
              ? ricelogo
              : packageType === 'Deluxe'
              ? diamondlogo
              : crownlogo;

          const image =
            packageType === 'Basic'
              ? basicfood
              : packageType === 'Deluxe'
              ? deluxefood
              : premiumfood;

          grouped[packageType as keyof GroupedMenus].push({
            food: menu.menu_title,
            logo,
            image: menu.menu_image || image,
            content: menu.menu_description,
          });
        });

        setGroupedMenus(grouped);
      } catch (error) {
        console.error('Failed to fetch top menus:', error);
      }
    };

    fetchTopMenus();
  }, []);

  const renderMenu = (menus: MenuItem[], type: string) =>
    menus.map((menu, index) => (
      <div className="p-4" key={index}>
        <div className="w-[400px]">
          <div className="flex items-center justify-center">
            <img src={menu.logo} alt="Logo" width="24" height="24" />
          </div>
          <div className="flex items-center justify-center mt-5">
            <img
              src={menu.image}
              alt={menu.food}
              width="100"
              height="100"
              onClick={() =>
                openModal(
                  menu.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  type,
                  menu.logo,
                  menu.food,
                  menu.image
                )
              }
              className="cursor-pointer overflow-hidden rounded-full object-cover w-[100px] h-[100px]"
            />
          </div>
          <div className="top-food">{menu.food}</div>
        </div>
      </div>
    ));

  return (
    <div className="mx-4 md:mx-40 lg:mx-40">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
        type={modalType}
        logo={modalLogo}
        food={modalFood}
        logofood={modalFoodLogo}
      />

      {/* Basic Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Basic Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(groupedMenus.Basic, 'Basic')}
        </div>
      </div>

      {/* Deluxe Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Deluxe Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(groupedMenus.Deluxe, 'Deluxe')}
        </div>
      </div>

      {/* Premium Menu */}
      <div className="text-topic font-sans font-bold text-[32px] mt-5 mx-24">Top Premium Menu</div>
      <div className="flex items-center justify-center mx-20 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10">
          {renderMenu(groupedMenus.Premium, 'Premium')}
        </div>
      </div>
    </div>
  );
};

export default Home;
