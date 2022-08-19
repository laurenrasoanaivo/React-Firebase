
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../firebase-config";
import '../styles/style.css';
import logo from '../assets/logo.svg';
import ReactSimplyCarouselExample from "./Carouseldata";

const Logout: React.FC<{}> = () => {

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/");
    }, [user, loading, navigate])

    return (
        <div className='bg-gradient-to-br from-dunkBlue to-coral h-screen'>
            <div className='p-4'>
                <img className='w-20' src={logo} alt='logo' />
            </div>
            <div className="carousel">
                <div className="m-4 text-center text-2xl text-white font-bold">
                    <h1>Welcome <span className="text-coral">{user?.email?.split("@")[0]}</span></h1>
                </div>
                <div>
                    <ReactSimplyCarouselExample />
                </div>
                <div className="text-center">
                    <button
                        className="bg-dunkBlue m-4 p-4 rounded-lg font-bold text-gray text-center"
                        onClick={logOut}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Logout;
