import React, { useState } from 'react'
import Home from './Home'
import Top from '../Top/Top'

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <Home />
      <Top isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default LandingPage
