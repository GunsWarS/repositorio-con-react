import producto2 from '../imagenes/producto2.jpg';
import producto3 from '../imagenes/producto3.jpg';
import MenuText from './MenuText';

const main = [
  {
    id: 1,
    name: 'Juego de Sala',
    image: producto2,
    price: '$2.000.000'
  },
  {
    id: 2,
    name: 'Sofa',
    image: producto3,
    price: '$2.000.000'
  }
]

function Main() {
  return (
    <div className='container'>
      <div className='row'>
        {
          main.map(main => (
            <div className='col-md-6 mb-4' key={main.id}>
              <MenuText
                name={main.name}
                image={main.image}
                price={main.price} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Main;