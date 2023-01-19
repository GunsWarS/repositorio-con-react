import Section from './Section';
import producto4 from '../imagenes/producto4.jpg';
import producto5 from '../imagenes/producto5.jpg';
import producto6 from '../imagenes/producto6.jpg';


const section2 = [
  {
    id: 4,
    name: 'Producto 4',
    imagen: producto4,
    precio: '$500.000°°'
  },
  {
    id: 5,
    name: 'Producto 5',
    imagen: producto5,
    precio: '$5.000.000°°'
  },
  {
    id: 6,
    name: 'Producto 6',
    imagen: producto6,
    precio: '$7.000.000°°'
  }

]

function Section2() {
  return (
    <div className='container'>
      <div className='row'>
        {
          section2.map(submenu => (
            <div className='col-md-4 mb-4' key={submenu.id}>
              <Section
                name={submenu.name}
                imagen={submenu.imagen}
                precio={submenu.precio} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Section2;