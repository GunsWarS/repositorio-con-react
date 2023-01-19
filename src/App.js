import './App.css';
import Header from './componentes/Header';
import Section2 from './componentes/Section2';
import Imagenprincipal from './componentes/Imagenprincipal';
import Menuprincipal2 from './componentes/Menuprincipal2';
import Categoriasproductos2 from './componentes/Categoriasproductos2';
import Footer2 from './componentes/Footer2';
import Imagensecundaria2 from './componentes/Imagensecundaria2';
import Navbar2 from './componentes/Navbar2';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar2 />
      <Imagenprincipal />
      <Imagensecundaria2 />
      <Menuprincipal2 />
      <Section2 />
      <Categoriasproductos2 />
      <Footer2 />
    </div>
       );
}
export default App;
