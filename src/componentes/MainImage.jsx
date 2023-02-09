import imgprincipal from '../imagenes/imgprincipal.jpg'

function MainImage() {
  return (
    <div className='hero'>
      <img className='img-fluid'
        src={imgprincipal}
        alt='imagen principal' />
    </div>
  )
};
export default MainImage;


