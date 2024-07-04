import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = () => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if (loading) 
        return 
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;