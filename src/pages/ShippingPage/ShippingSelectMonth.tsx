import { useLocation } from 'react-router-dom';
import React from 'react';

const ShippingSelectMonth: React.FC = () => {
    const location = useLocation();
    const month = location.state?.month;
    return (<div>
        <div>
            {month} history
        </div>
    </div>)
}

export default ShippingSelectMonth;