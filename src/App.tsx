import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Top from './pages/Top'

export default function App() {
  return (
    <div className="bg-[#C6FFEA]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
