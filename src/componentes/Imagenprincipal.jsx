import imgprincipal from '../imagenes/imgprincipal.jpg'

function Imagenprincipal() {
  return (
    <div className='hero'>
      <img className='img-fluid'
        src={imgprincipal}
        alt='imagen principal' />
    </div>
  )
};
export default Imagenprincipal;


