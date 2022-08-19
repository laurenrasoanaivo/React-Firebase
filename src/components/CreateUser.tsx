import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import '../styles/style.css';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser: React.FC<{}> = () => {

    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const navigate = useNavigate();

    function validEmail(e: any) {
        e.target.value.includes('@gmail.com') ? setRegisterEmail(e.target.value) : alert('Invalid email adress')
    }

    const register = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Account create successfull');
            alert('Your account are created successfully \n Please sign in now')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg-gradient-to-br from-dunkBlue to-coral h-screen'>
            <div className='p-4'>
                <button
                    className='float-right bg-dunkBlue m-4 py-4 px-6 rounded-lg font-bold text-gray'
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/')
                    }}
                >
                    Sign in
                </button>
                <img className='w-20' src={logo} alt='logo' />
            </div>
            <div
                className='center shadow-md shadow-turquoise block mx-auto text-center m-4 p-4 bg-gray-t rounded-2xl laptop:w-1/3 phone:w-11/12  tablet:w-2/3'
            >
                <h1 className='text-dunkBlue font-bold text-xl m-4' >Create User</h1>
                <form>
                    <label
                        className="text-white font-bold"
                    >
                        <FontAwesomeIcon className="text-turquoise" icon={solid('envelope')} size="lg" /> Email
                    </label><br></br>
                    <input
                        className='m-2 p-2 w-2/3 rounded-md outline-none focus:outline-turquoise'
                        type={'email'}
                        placeholder={'email'}
                        onBlur={(e) => validEmail(e)}
                    /><br></br>
                    <label
                        className="text-white font-bold"
                    >
                        Password  <FontAwesomeIcon className="text-coral" icon={solid('key')} size="lg" />
                    </label><br></br>
                    <input
                        className='m-2 p-2 w-2/3 rounded-md outline-none focus:outline-turquoise'
                        type={'password'}
                        placeholder={'password'}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    /><br></br>
                    <button
                        className='bg-dunkBlue m-4 p-4 rounded-lg font-bold text-gray'
                        type={'button'}
                        onClick={(e) => {
                            e.preventDefault();
                            register(registerEmail, registerPassword);
                        }}
                    >
                        Create User
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;

