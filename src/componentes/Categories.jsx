function Categories({ name, image }) {
  return (
    <section className='container-xl'>
      <div className='overflow-hidden'>
        <img className='img-fluid'
          src={image}
          alt='imagen category' />
      </div>
      <a className='text-dark fs-2 text-decoration-none text-center d-block py-3'
        href='#!'>{name}</a>
      <hr className='hr-section' />
    </section>
  )
}
export default Categories;