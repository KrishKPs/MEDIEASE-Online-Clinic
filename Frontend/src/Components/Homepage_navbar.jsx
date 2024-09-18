import { useNavigate } from "react-router-dom";
import { Toggle } from "./Toggle";

export function Homepage_navbar() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-around items-center p-4 cursor-pointer bg-gray-100 shadow-md">
            <h1 className="text-2xl font-bold" onClick={() => {navigate ('/')}}>Welcome!</h1>
            <h1 
                onClick={() => navigate('/doctors')}
                className="text-lg font-semibold cursor-pointer hover:text-blue-600 transition-colors"
            >
                Find Doctor
            </h1>
            <Toggle />
        </div>
    );
}
