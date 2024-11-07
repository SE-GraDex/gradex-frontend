import React from "react";

interface CardTempProps {
    Height: number;
    Width: number;
}

const CardTemp: React.FC<CardTempProps> = ({ Height, Width }) => {

    return (
        <div className={`w-[${Width}px] h-[${Height}px] bg-[#47C171] relative rounded-3xl`}>
            <div className="absolute top-6 left-6 bg-white rounded-full w-4 h-4"></div>
            <div className="absolute top-6 right-6 bg-white rounded-full w-4 h-4"></div>
            <div className="absolute bottom-6 left-6 bg-white rounded-full w-4 h-4"></div>
            <div className="absolute bottom-6 right-6 bg-white rounded-full w-4 h-4"></div>
        </div>
    );
}

export default CardTemp;