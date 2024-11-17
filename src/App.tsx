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
import MealPreparation from './components/MealPrePage/MealPreparationPage'
import IngredientManagement from './pages/MenuLab/IngredientManagment/IngredientManagementPage';
import MealManagementPage from './pages/MenuLab/MealManagement/MealManagementPage';
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isNotNav = location.pathname === '/delivery-center' || '/ongoing' || '/complete';

  return (
    <div>
      {!isNotNav && <Navbar />}
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#7BB3B5] min-h-screen">
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/delivery-center" element={<Delivery />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/complete" element={<Complete />}/>
          <Route path="/menulab" element={<Menu />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/meal-preparation" element={<MealPreparation />} />
          <Route path="/ingredientmanagement" element={<IngredientManagement />} />
          <Route path="/mealmanagementpage" element={<MealManagementPage />} />
          
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}
