import NavBar from './components/NavBar';
import Imagen from './components/Imagen';
import Titulo from './components/Titulo';
import SobreMi from './components/SobreMi';
import Trabajos from './components/Trabajos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import BioHack from './components/Works.jsx/BioHack';
import ReactProj from './components/Works.jsx/ReactProj';
import DWebProj from './components/Works.jsx/DWebProj';
import JSProj from './components/Works.jsx/JSProj';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <Router>
        <Imagen />
        <Routes>
          <Route path="/" element={<NavBar/>} />
          <Route path="sobreMi" element={<SobreMi/>} />
          <Route path="trabajos" element={<Trabajos/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="trabajos/bioHacker" element={<BioHack/>} />
          <Route path="trabajos/reactProj" element={<ReactProj/>} />
          <Route path="trabajos/jsProj" element={<JSProj/>} />
          <Route path="trabajos/dWebProj" element={<DWebProj/>} />
        </Routes>
        <Titulo/>
        <Footer />
    </Router>
  );
}

export default App;
