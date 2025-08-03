import { Outlet } from "react-router-dom";
import Protect from "./Protect";
import DesktopNav from "../sections/desktopnavigation/Index";
import MobileNav from "../sections/mobilenavigation/Index";
import Header from "../sections/header/Index";
import Footer from "../sections/footer/Index";

const DashboardLayout = () => {
    return (
        <Protect>
            <div className="relative font-main size-full h-screen flex flex-col bg-white group/design-root overflow-hidden">
                <div className="layout-container flex-1 flex h-full grow flex-col">
                    <header className="border-b border-solid border-b-[#f4f0f0] px-10 py-3">
                        <Header />
                    </header>
                    <main className="flex-1 flex flex-col-reverse md:flex-row overflow-hidden">
                        <nav className="flex justify-start w-full md:w-72 overflow-y-auto scroll-smooth overflow-x-hidden">
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
                </div>
            </div>
        </Protect>
    );
};

export default DashboardLayout;
