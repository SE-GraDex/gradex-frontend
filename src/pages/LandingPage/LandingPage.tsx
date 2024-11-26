import React from 'react';
import Home from './Home';
import Top from '../Top/Top';
import Navbar from '../../components/Navbar';
const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Top />
        </div>
    );
};

export default LandingPage;