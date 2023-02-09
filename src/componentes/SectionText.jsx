import Section from './Section';
import producto4 from '../imagenes/producto4.jpg';
import producto5 from '../imagenes/producto5.jpg';
import producto6 from '../imagenes/producto6.jpg';

const sectionText = [
  {
    id: 4,
    name: 'Comedor',
    image: producto4,
    price: '$500.000°°'
  },
  {
    id: 5,
    name: 'Juego de Alcoba',
    image: producto5,
    price: '$5.000.000°°'
  },
  {
    id: 6,
    name: 'Juego de Alcoba pequeño',
    image: producto6,
    price: '$7.000.000°°'
  }

]

function SectionText() {
  return (
    <div className='container'>
      <div className='row'>
        {
          sectionText.map(submenu => (
            <div className='col-md-4 mb-4' key={submenu.id}>
              <Section
                name={submenu.name}
                image={submenu.image}
                price={submenu.price} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default SectionText;