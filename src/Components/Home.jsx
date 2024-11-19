
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import ChoseSection from './ChoseSection';
import OtherSection from './OtherSection';

const Home = () => {
    return (
            <>
            <div className='bg-teal-200'>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <div className='bg-green-200'>
            <Outlet></Outlet>
            <ChoseSection></ChoseSection>
            <OtherSection></OtherSection>
            </div>
            
            <Footer></Footer>
            </>
    );
};

export default Home;