

import Menuprincipal from './Menuprincipal';
import producto2 from '../imagenes/producto2.jpg';
import producto3 from '../imagenes/producto3.jpg';

const menuprincipal2 = [
  {
    id: 1,
    name: 'Producto 2',
    imagen: producto2,
    precio: '$2.000.000'
  },
  {
    id: 2,
    name: 'Producto 3',
    imagen: producto3,
    precio: '$2.000.000'
  }
]

function Menuprincipal2() {
  return (
    <div className='container'>
      <div className='row'>
        {
          menuprincipal2.map(menu => (
            <div className='col-md-6 mb-4' key={menu.id}>
              <Menuprincipal
                name={menu.name}
                imagen={menu.imagen}
                precio={menu.precio} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Menuprincipal2;