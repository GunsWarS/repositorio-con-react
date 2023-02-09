import Categories from './Categories';
import categoria1 from '../imagenes/categoria1.jpg';
import categoria2 from '../imagenes/categoria2.jpg';
import categoria3 from '../imagenes/categoria3.jpg';

const productCategory = [
  {
    id: 1,
    name: 'Oficina',
    image: categoria1,
  },
  {
    id: 2,
    name: 'Hogar',
    image: categoria2,
  },
  {
    id: 3,
    name: 'Cocina',
    image: categoria3,
  }
]

function ProductCategory() {
  return (
    <div className='row'>
      <div className='row mt-5'>
        <h2 className='text-products'>Categorias de productos</h2>
        {
          productCategory.map(category => (
            <div className='p-5 col-md-4 category' key={category.id}>
              <Categories
                name={category.name}
                image={category.image} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default ProductCategory;