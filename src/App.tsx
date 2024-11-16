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
import Hungry from './pages/WhoHungry';
import Recipe from './pages/Recipe/Recipe';
import Sub from './pages/Subscribtion'
import History from './pages/History'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isNotNav = ['/delivery-center', '/ongoing', '/complete', '/login', '/register','/hungry'].includes(location.pathname);

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
          <Route path="/complete" element={<Complete />}/>
          <Route path="/menulab" element={<Menu />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/meal-preparation" element={<MealPreparation />} />
          <Route path="/hungry" element={<Hungry />} />
          <Route path="/recipe-book" element={<Recipe />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/shipping" element={<History />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}
