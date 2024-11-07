import React from 'react';
import CardTemp from './CardTemp';
const MunuSelectorCard: React.FC = () => {
    return (<div className="flex flex-col space-y-10">
        <div className="w-[617px] h-[250px] bg-[#47C171] rounded-3xl flex justify-center">
            <div className='mt-3'>Select menu</div>
        </div>
        {1 ? <CardTemp Height={'375'} Width={'617'} /> : <div className="w-[617px] h-[375px] bg-[#47C171] rounded-3xl">

        </div>}


    </div>);
}

export default MunuSelectorCard;