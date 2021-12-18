import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { AddProtocolo } from './pages/AddProtocolo';

export function Adresses(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addprotocolo" element={<AddProtocolo />} />
        </Routes>
    )
}