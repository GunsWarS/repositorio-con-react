import '../hojas-de-estilo/Footer.css';

function Footer({ name, name2, name3 }) {
  return (
      <div className='footer-container'>
        <a className='text-dark text-decoration-none' href='#!'>{name}</a>
        <a className='text-dark text-decoration-none' href='#!'>{name2}</a>
        <a className='text-dark text-decoration-none' href='#!'>{name3}</a>
      </div>
           )
}
export default Footer;




