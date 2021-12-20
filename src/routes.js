import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { AddProtocol } from './pages/AddProtocol';

export function Adresses(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addprotocol" element={<AddProtocol />} />
        </Routes>
    )
}