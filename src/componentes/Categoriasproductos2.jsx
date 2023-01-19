import Categoriasproductos from './Categoriasproductos';
import categoria1 from '../imagenes/categoria1.jpg';
import categoria2 from '../imagenes/categoria2.jpg';
import categoria3 from '../imagenes/categoria3.jpg';


const categoriasproductos2 = [
  {
    id: 1,
    name: 'Oficina',
    imagen: categoria1,
  },
  {
    id: 2,
    name: 'Hogar',
    imagen: categoria2,
  },
  {
    id: 3,
    name: 'Cocina',
    imagen: categoria3,
  }
]

function Categoriasproductos2() {
  return (
    <div className='row'>
      <div className='row mt-5'>
        <h2 className='texto-nuestros-productos'>Categorias de productos</h2>
        {
          categoriasproductos2.map(categorias => (
            <div className='p-5 col-md-4 categoria' key={categorias.id}>
              <Categoriasproductos
                name={categorias.name}
                imagen={categorias.imagen} />
            </div>
          ))
        }
        
      </div>
    </div>
  )
}
export default Categoriasproductos2;