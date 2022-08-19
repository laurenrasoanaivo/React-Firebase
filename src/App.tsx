import React from 'react';
import LoginPage from "./components/LoginPage";
import Logout from './components/Logout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LoginPage />}/>
                <Route path={"/logout"} element={<Logout />}/>
                <Route path={"/createUser"} element={<CreateUser />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;