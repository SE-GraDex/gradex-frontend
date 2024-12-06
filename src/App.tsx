import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Delivery from './pages/DeliveryCenter/DeliveryCenter'
import Ongoing from './pages/DeliveryCenter/Ongoing/Ongoing'
import Complete from './pages/DeliveryCenter/CompleteShip/CompleteShip'
import Menu from './pages/MenuLab/MenuLab'
import Login from './pages/LoginAndRegister/login'
import Register from './pages/LoginAndRegister/register'
import MealPreparation from './pages/MealPrePage/MealPreparationPage'
import Hungry from './pages/WhoHungry'
import Recipe from './pages/Recipe/Recipe'
import History from './pages/ShippingPage/History'
import Food from './pages/Recipe/RecipeFood'
import IngredientManagement from './pages/MenuLab/IngredientManagment/IngredientManagementPage'
import MealManagementPage from './pages/MenuLab/MealManagement/MealManagementPage'
import ShippingSelectMonth from './pages/ShippingPage/ShippingSelectMonth'
import Subscription from './pages/Subscribtion/Subscribtion'
import CreditCardPaymentPage from './pages/Subscribtion/CreditCardPaymentPage'
import QRCodePaymentPage from './pages/Subscribtion/QRCodePaymentPage'
import AllPaymentPage from './pages/Subscribtion/AllPaymentPage'
import LandingPage from './pages/LandingPage/LandingPage'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isNotNav = [
    '/delivery-center',
    '/ongoing',
    '/complete',
    '/login',
    '/register',
    '/hungry',
    '/mealmanagementpage',
    '/ingredientManagement',
    '/menulab',
    '/ingredientmanagement',
    '/mealmanagementpage',
  ].includes(location.pathname)

  return (
    <div>
      {!isNotNav && <Navbar />}
      {children}
    </div>
  )
}

function AppContent() {
  const location = useLocation()
  const backgroundColors = [
    {
      color: 'bg-[#C6FFEA]',
      path: [
        '/',
        '/register',
        '/login',
        '/hungry',
        '/recipe-book',
        '/shipping',
        '/recipe-food',
        '/shippingselectmonth',
        '/subscription',
        '/credit-card-payment',
        '/qr-code-payment',
        '/all-payment',
        '/meal-preparation',
      ],
    },
    {
      color: 'bg-[#7BB3B5]',
      path: ['/delivery-center', '/ongoing', '/complete', '/menulab', '/ingredientmanagement', '/mealmanagementpage'],
    },
  ]

  const currentBgColor =
    backgroundColors.find((bg) => bg.path.some((p) => p === location.pathname))?.color || 'bg-white'

  return (
    <div className={`${currentBgColor} min-h-screen`}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/delivery-center" element={<Delivery />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/menulab" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/meal-preparation" element={<MealPreparation />} />
          <Route path="/hungry" element={<Hungry />} />
          <Route path="/recipe-book" element={<Recipe />} />
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
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
