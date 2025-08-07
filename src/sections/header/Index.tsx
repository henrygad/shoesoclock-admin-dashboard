import { useNavigate } from "react-router-dom";
import DisplayUserAvatar from "../../components/DisplayUserAvatar";
import NotificationButtonUI from "../../ui/header/NotificationButtonUI";
import MainLogoUi from "../../ui/logo/MainLogoUi";

const Header = () => {
    const navigate = useNavigate();
    return <>
        <nav className="flex-1 flex items-center justify-between whitespace-nowrap">
            {/* Header navigation for logo , notification btn, admin profile photo */}
            <MainLogoUi />
            <div className="flex flex-1 justify-end gap-4">
                {/* Notification header button */}
                <NotificationButtonUI onclick={()=> navigate("/notifications")} />
                {/* User avatar */}
                <DisplayUserAvatar />
            </div>
        </nav>
    </>;
};

export default Header;

