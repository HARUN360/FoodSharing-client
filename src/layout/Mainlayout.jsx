import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-380px)]">
                 <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;