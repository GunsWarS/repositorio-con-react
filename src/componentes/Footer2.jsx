import Footer from './Footer';
import '../hojas-de-estilo/Footer.css';


const footer2 = [
    {
        id: 1,
        name: 'Cocina',

    },
    {
        id: 2,
        name: 'Oficina',

    },
    {
        id: 3,
        name: 'Jardin',

    },
    {
        id: 4,
        name: 'Cochera',

    },
    {
        id: 5,
        name: 'Dormitorios',

    },
    // ---------------------------------------------------------------------------
    {
        id: 6,
        name2: 'Nuestra Historia',

    },
    {
        id: 7,
        name2: 'Mision, vision y valores',

    },
    {
        id: 8,
        name2: 'Carreras',

    },
    {
        id: 9,
        name2: 'Politica de Privacidad',

    },
    {
        id: 10,
        name2: 'Termino de Servicio',

    },
    // -----------------------------------------------------------------------------------
    {
        id: 11,
        name3: 'Preguntas Frecuentes',

    },
    {
        id: 12,
        name3: 'Ayuda en Linea',
    },
    {
        id: 13,
        name3: 'Confianza y Seguridad',
    },
]
// ---------------------------------------------------------------------------------------------

function Footer2() {
  return (
    <>
        <div className='texto-contenedor'>
          <h3 className='categorias'>Categorias</h3>
          <h3 className='sobre-nosotros'>Sobre Nosotros</h3>
          <h3 className='soporte'>Soporte</h3>
        </div>
          {
            footer2.map(footer => (
              <nav className='d-flex flex-column' key={footer.id}>
                <Footer
                  name={footer.name}
                  name2={footer.name2}
                  name3={footer.name3}
                   />
              </nav>
          ))
          }
    <p className='mt-5 text-center fs-2'>Todos los derechos Reservados. TiendaMuebles</p>
    </>
    )
}
export default Footer2;

