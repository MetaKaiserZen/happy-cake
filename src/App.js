import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navegacion from './components/Navegacion';

import Home from './views/Home';
import Contacto from './views/Contacto';

function App()
{
    return (
        <div className="App">
            <BrowserRouter>
                <Navegacion />
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/contacto" element={<Contacto />} />
                   <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
