import { Outlet } from "react-router-dom";
import NavBer from "../pages/Shares/NavBer/NavBer";
import Footer from "../pages/Shares/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className="min-h-[calc(100vh-535px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;