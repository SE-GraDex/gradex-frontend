import React, { useState, useEffect } from 'react'
import LogoYai from '../assets/images/LogoYai.svg'
import ButtonLink from './button/ButtonLink'
import { axiosInstance } from '@/utils/Axios'

interface NavItem {
  label: string
  link: string
}

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    axiosInstance
      .get('/api/auth/currentuser', { withCredentials: true })
      .then(() => {
        setIsLoggedIn(true)
      })
      .catch((error) => {
        console.error('Error fetching current user:', error.message)
        setIsLoggedIn(false)
      })
  }, [])

  // Logout handler
  const handleLogout = () => {
    axiosInstance
      .post('/api/auth/logout', {}, { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false)
        window.location.reload() // Optionally refresh the page
      })
      .catch((error) => {
        console.error('Error logging out:', error.message)
      })
  }

  const navItems: NavItem[] = [
    { label: 'Meal preparation', link: '/meal-preparation' },
    { label: 'Shipping', link: '/shipping' },
    { label: 'Subscription', link: '/subscription' },
    { label: 'Recipe book', link: '/recipe-book' },
  ]
  return (
    <div className="sticky top-0 z-100 flex items-center justify-center w-full bg-white h-[111px] px-8 mx-auto shadow-md">
      <div className="mb-8">
        <a aria-label="Home" href="/">
          <img src={LogoYai} alt="Logo" width="400" height="400" />
        </a>
      </div>
      <div className="hidden md:flex ml-20 w-[800px] h-[111px] items-center justify-center space-x-2">
        {navItems.map((item, index) => (
          <ButtonLink key={index} label={item.label} link={item.link} />
        ))}
        {!isLoggedIn ? (
          <a
            href="/login"
            className="border border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-white transition-all duration-200"
          >
            Login
          </a>
        ) : (
          <button
            onClick={handleLogout}
            className="border border-[#30E06C] bg-[#30E06C] rounded-full px-4 py-3 text-black hover:bg-white transition-all duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
