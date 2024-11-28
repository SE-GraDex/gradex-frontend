import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoYai from '../assets/images/LogoYai.svg';
import ButtonLink from './button/ButtonLink';
import Cookies from 'js-cookie';

interface NavItem {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check for authentication token on component mount
  useEffect(() => {
    const checkAuth = () => {
      const authToken = Cookies.get('token'); // Look for 'token' cookie
      setIsLoggedIn(!authToken); // Set state based on cookie presence
    };

    checkAuth(); // Initial check
    window.addEventListener('storage', checkAuth); // Update on storage changes (optional if other tabs can affect cookies)

    return () => {
      window.removeEventListener('storage', checkAuth); // Cleanup listener
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    Cookies.remove('token', { path: '/' }); // Remove 'token' cookie
    setIsLoggedIn(false); // Update state
    navigate('/'); // Redirect to home page
  };

  // Handle login redirect
  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  const navItems: NavItem[] = [
    { label: 'Meal preparation', link: '/meal-preparation' },
    { label: 'Shipping', link: '/shipping' },
    { label: 'Subscription', link: '/subscription' },
    { label: 'Recipe book', link: '/recipe-book' },
  ];

  return (
    <div className="sticky top-0 z-100 flex items-center justify-center w-full bg-white h-[111px] px-8 mx-auto shadow-md">
      <div className="mb-8">
        <a aria-label="Home" href="/">
          <img src={LogoYai} alt="Logo" width="400" height="400" />
        </a>
      </div>
      <div className="ml-20 flex w-[800px] h-[111px] items-center justify-center space-x-2">
        {navItems.map((item, index) => (
          <ButtonLink key={index} label={item.label} link={item.link} />
        ))}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="border border-red-500 bg-red-500 rounded-full px-4 py-3 text-white hover:bg-white hover:text-red-600 transition-all duration-200"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="border border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-white transition-all duration-200"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
