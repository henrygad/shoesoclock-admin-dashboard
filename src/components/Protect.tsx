import { useEffect, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { Navigate } from "react-router-dom";
import { status } from "../store/slices/userSlice";


const Protect = ({ children }: { children: ReactNode }) => {
    const user = useAppSelector(state => state.user);
    const appDispatch = useAppDispatch();

    useEffect(() => {
        // Check whether user cookie session
        // in the backend is till valid on refresh.
        // This will return an object containing 
        //  {email, username or id}, to prove user is till login from the backend        
        appDispatch(status({status: "UNAUTHENTICATED"}));
    }, []);

    if (user.status === "LOADING") {
        return <div>
            <span className="inline-block">Status Loading...</span>
        </div>;
    }
    else if (user.status === "UNAUTHENTICATED") {
        return <Navigate to="/login" />;
    }

    else return children;
};

export default Protect;