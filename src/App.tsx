import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MealPreparation from './components/MealPrePage/MealPreparationPage'
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-preparation" element={<MealPreparation />} />
      </Routes>
      <Footer />
    </Router>
  )
}
