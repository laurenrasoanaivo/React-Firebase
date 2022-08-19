import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../styles/style.css';
import logo from '../assets/logo.svg';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const LoginPage: React.FC<{}> = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, loading] = useAuthState(auth);
    const [authing, setAuthing] = useState(false);
    const navigate = useNavigate();

    function validEmail(e: any) {
        e.target.value.includes('@gmail.com') ? setEmail(e.target.value) : alert('Invalid email adress')
    }

    useEffect(() => {
        if (user) navigate("/logout");
        if (!user) {
            navigate("/");
        }
    }, [user, loading, navigate]);

    const logInWithEmailAndPassword = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successfull');
            navigate("/logout")
        } catch (error) {
            alert('Please enter a valide email and password');
            console.error(error);
        }
    };

    const signInWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate("/logout")
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
                alert("You already have an account with this email adress");
            })
    }

    const signInWithFacebook = async () => {
        setAuthing(true);
        signInWithPopup(auth, new FacebookAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
                alert("You already have an account with this email adress");
            })
    }

    const signInWithGithub = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GithubAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
                alert("You already have an account with this email adress");
            })
    }


    return (<>
        <div className='bg-gradient-to-br from-dunkBlue to-coral h-screen'>
            <div className='p-4'>
                <button
                    className='float-right bg-dunkBlue m-4 p-4 rounded-lg font-bold text-gray'
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/createUser')
                    }}
                >
                    Create user
                </button>
                <img className='w-20' src={logo} alt='logo' />
            </div>
            <div
                className='center shadow-md shadow-turquoise block mx-auto text-center m-4 p-4 bg-gray-t rounded-2xl  laptop:w-1/3 phone:w-11/12  tablet:w-2/3'
            >
                <h2 className='text-dunkBlue font-bold text-xl m-4' >login</h2>
                <form className='flex flex-col'>
                    <div >
                        <input
                            className='m-2 p-2 w-2/3 rounded-md outline-none focus:outline-turquoise'
                            type={"email"}
                            placeholder="Email"
                            onBlur={(e) => {
                                validEmail(e);
                            }}
                        />
                    </div>
                    <div >
                        <input
                            className='m-2 p-2 w-2/3 rounded-md outline-none focus:outline-turquoise'
                            type="password"
                            placeholder="Password"
                            onChange={(event) => {
                                setPassword(event.target?.value);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            className='bg-dunkBlue m-4 px-4 py-2 rounded-lg font-bold text-gray'
                            onClick={(e) => {
                                e.preventDefault();
                                logInWithEmailAndPassword(email, password);
                            }}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className='flex block mx-auto'>
                        <div>
                            <button
                                className='m-2 text-coral hover:text-turquoise'
                                onClick={(e) => {
                                    e.preventDefault();
                                    signInWithGoogle();
                                }}
                            >
                                <FontAwesomeIcon icon={brands('google')} size="2x" />
                            </button>
                        </div>
                        <div>
                            <button
                                className='m-2 text-coral hover:text-turquoise'
                                onClick={(e) => {
                                    e.preventDefault();
                                    signInWithFacebook();
                                }}
                            >
                                <FontAwesomeIcon icon={brands('facebook')} size="2x" />
                            </button>
                        </div>
                        <div>
                            <button
                                className='m-2 text-coral hover:text-turquoise'
                                onClick={(e) => {
                                    e.preventDefault();
                                    signInWithGithub();
                                }}
                            >
                                <FontAwesomeIcon icon={brands('github')} size="2x" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>);
}


export default LoginPage;