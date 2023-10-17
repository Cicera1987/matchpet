import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/pages/Home';
import Regras from '../components/pages/Regas';
import Variaveis from '../components/pages/Variaveis';
import Visualizar from '../components/pages/Visualizar';

const Router: React.FC = () => {
    return (
        <>
           <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home/>}/>
                    <Route path="/regras" element={<Regras />} />
                    <Route path="/variaveis" element={<Variaveis />} />
                    <Route path="/visualizar" element={<Visualizar />} />
           </Routes>
           </BrowserRouter>
        </>
    );
}
export default Router;