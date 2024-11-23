import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './pages/Top/Top';
import Delivery from './pages/DeliveryCenter/DeliveryCenter';
import Ongoing from './pages/DeliveryCenter/Ongoing/Ongoing'
import Complete from './pages/DeliveryCenter/CompleteShip/CompleteShip'
import Menu from './pages/MenuLab/MenuLab'
import Login from './pages/LoginAndRegister/login'
import Register from './pages/LoginAndRegister/register'
import MealPreparation from './pages/MealPrePage/MealPreparationPage'
import Hungry from './pages/WhoHungry';
import Recipe from './pages/Recipe/Recipe';
import Sub from './pages/Subscribtion/Subscribtion'
import History from './pages/ShippingPage/History'
import Food from './pages/Recipe/RecipeFood'
import IngredientManagement from './pages/MenuLab/IngredientManagment/IngredientManagementPage';
import MealManagementPage from './pages/MenuLab/MealManagement/MealManagementPage';
import ShippingSelectMonth from './pages/ShippingPage/ShippingSelectMonth';
import Subscription from './pages/Subscribtion/Subscribtion';
import CreditCardPaymentPage from './pages/Subscribtion/CreditCardPaymentPage';
import QRCodePaymentPage from './pages/Subscribtion/QRCodePaymentPage';
import AllPaymentPage from './pages/Subscribtion/AllPaymentPage';
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isNotNav = ['/delivery-center', '/ongoing', '/complete', '/login', '/register', '/hungry', '/mealmanagementpage'].includes(location.pathname);

  return (
    <div>
      {!isNotNav && <Navbar />}
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#C6FFEA] min-h-screen">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<Top />} />
            <Route path="/delivery-center" element={<Delivery />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/menulab" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/meal-preparation" element={<MealPreparation />} />
            <Route path="/hungry" element={<Hungry />} />
            <Route path="/recipe-book" element={<Recipe />} />
            <Route path="/sub" element={<Sub />} />
            <Route path="/shipping" element={<History />} />
            <Route path="/recipe-food" element={<Food />} />
            <Route path="/ingredientmanagement" element={<IngredientManagement />} />
            <Route path="/mealmanagementpage" element={<MealManagementPage />} />
            <Route path="/shippingselectmonth" element={<ShippingSelectMonth />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/credit-card-payment" element={<CreditCardPaymentPage />} />
            <Route path="/qr-code-payment" element={<QRCodePaymentPage />} />
            <Route path="/all-payment" element={<AllPaymentPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
