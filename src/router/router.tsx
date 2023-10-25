import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import { InterfaceMatch } from '../components/pages/interface/matchPet';
import { InterfaceMatchRequest } from '../components/pages/interface/matchPetRequest';
import Regras from '../components/pages/Regras';
import Variaveis from '../components/pages/Variaveis';
import Visualizar from '../components/pages/Visualizar';

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/regras" element={<Regras />} />
                    <Route path="/variaveis" element={<Variaveis />} />
                    <Route path="/visualizar" element={<Visualizar />} />
                    <Route path='interface' element={<InterfaceMatch />} />
                    <Route path='matchPetRequest' element={<InterfaceMatchRequest />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Router;