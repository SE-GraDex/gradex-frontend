import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './pages/Top';
import Delivery from './pages/DeliveryCenter';
import Ongoing from './pages/Ongoing'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isNotNav = location.pathname === '/delivery-center' || '/ongoing';

  return (
    <div>
      {!isNotNav && <Navbar />}  {/* Show Navbar only if not on Delivery page */}
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
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}
