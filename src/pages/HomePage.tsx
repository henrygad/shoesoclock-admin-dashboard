import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return <div>
        HomePage
        <button className="cursor-pointer"
            onClick={()=> navigate("/settings")}
        >setting</button>
    </div>;
};

export default HomePage;
