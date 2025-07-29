import DisplayUserAvatar from "../../components/DisplayUserAvatar";
import NotificationHeaderBtn from "../../components/NotificationHeaderBtn";
import MainLogoUi from "../../ui/logo/MainLogoUi";

const HeaderNav = () => {
    return <>
        {/* header logo */}
        <MainLogoUi />
        <div className="flex flex-1 justify-end gap-8">
            {/* Notification header button */}
            <NotificationHeaderBtn />
            {/* User avatar */}
            <DisplayUserAvatar />
        </div>
    </>;
};

export default HeaderNav;

