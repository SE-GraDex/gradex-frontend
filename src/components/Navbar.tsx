// components/Navbar.tsx
import React from 'react';
import LogoYai from '../assets/images/LogoYai.svg';
import ButtonLink from './button/ButtonLink';

interface NavItem {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {

  const navItems: NavItem[] = [
    { label: "Meal preparation", link: "/meal-preparation" },
    { label: "Shipping", link: "/shipping" },
    { label: "Subscription", link: "/subscription" },
    { label: "Recipe book", link: "/recipe-book" }
  ];

  return (
    <div className="flex items-center justify-center w-full bg-white h-[111px] px-8 mx-auto mt-3">
      <div className='mb-10'>
        <a aria-label="Home" href='/'>
          <img src={LogoYai} alt="Logo" width="400" height="400" />
        </a>
      </div>
      <div className="ml-20 flex w-[800px] h-[111px] items-center justify-center space-x-2">
        {navItems.map((item, index) => (
          <ButtonLink key={index} label={item.label} link={item.link} />
        ))}
        <button className="border border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-white transition-all duration-200">
          Login
        </button>
      </div>
    </div>
  );
  
};

export default Navbar;
