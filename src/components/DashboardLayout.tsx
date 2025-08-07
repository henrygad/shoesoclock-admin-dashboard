import { Navigate, Outlet } from "react-router-dom";
import DesktopNav from "../sections/desktopnavigation/Index";
import MobileNav from "../sections/mobilenavigation/Index";
import Header from "../sections/header/Index";
import Footer from "../sections/footer/Index";
import { useAppSelector } from "../store";

const DashboardLayout = () => {
    const user = useAppSelector((state) => state.user);

    if (user.status === "LOADING") {
        return <div>
            <span className="inline-block">
                Status loading...
            </span>
        </div>;
    }

    else if (user.status === "UNAUTHENTICATED") {
        return <Navigate to="/login" />;
    }
    
    return <>
        <header className="border-b border-solid border-b-[#f4f0f0] px-4 sm:px-6 py-3">
            <Header />
        </header>
        <main className="flex-1 flex flex-col-reverse md:flex-row overflow-hidden">
            <nav className="relative flex justify-start w-full md:w-72 overflow-y-auto scroll-smooth overflow-x-hidden">
                <DesktopNav />
                <MobileNav />
            </nav>
            <div className="flex-1 overflow-y-auto scroll-smooth overflow-x-hidden">
                <div className="flex flex-1 justify-center py-4 sm:py-6">
                    <div className="flex flex-col max-w-[960px] flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
        <footer className="w-full flex items-center overflow-hidden">
            <Footer />
        </footer>
    </>;
};
export default DashboardLayout;
