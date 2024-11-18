
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
            <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            </>
    );
};

export default Home;