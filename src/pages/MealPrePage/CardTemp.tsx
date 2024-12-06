import React from 'react'

interface CardTempProps {
  Height: string
  Width: string
}

const CardTemp: React.FC<CardTempProps> = ({ Height, Width }) => {
  return (
    <div className="bg-[#47C171] relative rounded-3xl" style={{ width: `${Width}px`, height: `${Height}px` }}>
      <div className="absolute top-6 left-6 bg-white rounded-full w-4 h-4"></div>
      <div className="absolute top-6 right-6 bg-white rounded-full w-4 h-4"></div>
      <div className="absolute bottom-6 left-6 bg-white rounded-full w-4 h-4"></div>
      <div className="absolute bottom-6 right-6 bg-white rounded-full w-4 h-4"></div>
    </div>
  )
}

export default CardTemp
