import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './pages/Top/Top';
import Delivery from './pages/DeliveryCenter/DeliveryCenter';
import Ongoing from './pages/Ongoing/Ongoing'
import Complete from './pages/CompleteShip/CompleteShip'


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
    <div className="bg-[#C6FFEA] min-h-screen">
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/delivery-center" element={<Delivery />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/complete" element={<Complete />}/>
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}
