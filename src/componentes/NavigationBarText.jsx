import Navbar from './Navbar';
import '../hojas-de-estilo/Navbar.css';

const navigationBarText = [
    {
        id: 1,
        name: 'Inicio'
    },
    {
        id: 2,
        name: 'Nosotros'
    },
    {
        id: 3,
        name: 'Tienda'
    },
    {
        id: 4,
        name: 'Blog'
    },
    {
        id: 5,
        name: 'Galeria'
    },
    {
        id: 6,
        name: 'Contacto'
    },
]


function NavigationBarText() {
    return (
        <div id='navegacion' className='navigation-bar-container'>
            {
                navigationBarText.map(element => (
                    <div className='container-nav'
                        href='#!'
                        key={element.id}>
                        <Navbar
                            name={element.name} />
                    </div>
                ))
            }
        </div>
    )
}
export default NavigationBarText;








