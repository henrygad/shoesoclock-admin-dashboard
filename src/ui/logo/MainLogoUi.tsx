import bethora from "../../assets/images/bethora-logo.png";


const MainLogoUi = () => {
    return <>
        <div className="flex items-center gap-3 text-[#181111]">
        <div className="flex items-center">
<img src={bethora} alt="Bethora Logo" className="w-8 h-8 object-center rounded-full" />
        </div>
    <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">Admin</h2> 



        </div>
    </>;
};

export default MainLogoUi;

