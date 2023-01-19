import Navbar from './Navbar';
import '../hojas-de-estilo/Navbar.css';

const navbar2 = [
    {
        id: 1,
        nombre: 'Inicio'
    },
    {
        id: 2,
        nombre: 'Nosotros'
    },
    {
        id: 3,
        nombre: 'Tienda'
    },
    {
        id: 4,
        nombre: 'Blog'
    },
    {
        id: 5,
        nombre: 'Galeria'
    },
    {
        id: 6,
        nombre: 'Contacto'
    },
]

function Navbar2() {
    return (
        <div id='navegacion' className='container-principal'>
            {
                navbar2.map(elemento => (
                    <div className='container-nav' href='#!' key={elemento.id}>
                        <Navbar
                            nombre={elemento.nombre} />
                    </div>
                ))
            }
        </div>
    )
}
export default Navbar2;








