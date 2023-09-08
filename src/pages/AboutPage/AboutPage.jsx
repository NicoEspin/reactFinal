//react router dom 
import { Link } from 'react-router-dom';
//css
import './AboutPage.css'

export const AboutPage = () => {
  return (
    <div className='about-container'>
      <h2 className='section-heading'>Acerca de Nuestra Tienda</h2>
      <div className='introduction'>
        <img className='store-image' src='/logo_ecommerce.jpg' alt='Nuestra Tienda' />
        <p>Bienvenido a Nuestra Tienda, donde nos apasiona brindar productos de calidad y un excelente servicio al cliente. Desde nuestros modestos comienzos, hemos crecido hasta convertirnos en una referencia en la industria del comercio electrónico.</p>
      </div>
      <div className='history'>
        <h3>Nuestra Historia</h3>
        <p>Fundada en 2023 por Juan Nicolas Espin, Nuestra Tienda comenzó como un pequeño negocio en línea que vendía productos artesanales. Con el tiempo, nuestra dedicación a la calidad y la satisfacción del cliente nos permitió crecer y expandirnos en nuevos mercados.</p>
      </div>
      <div className='team'>
        <h3>Nuestro Equipo</h3>
        <p>Nuestro equipo está formado por apasionados expertos en sus respectivas áreas. Trabajamos juntos para ofrecer la mejor experiencia de compra posible para nuestros clientes.</p>
      </div>
      <div className='values'>
        <h3>Nuestros Valores</h3>
        <ul>
          <li>Calidad y excelencia en nuestros productos</li>
          <li>Servicio al cliente de primera categoría</li>
          <li>Sostenibilidad y respeto al medio ambiente</li>
          <li>Innovación constante</li>
        </ul>
      </div>
      <div className='achievements'>
        <h3>Nuestros Logros</h3>
        <p>Hemos sido honrados con varios premios de la industria por nuestro compromiso con la calidad y la satisfacción del cliente.</p>
      </div>

      <div className='cta'>
        <p>¿Quieres conocer más sobre nosotros y nuestros productos? ¡Explora nuestra tienda ahora!</p>
        <Link to={'/'}> <button className='btn-explore'>Explorar Tienda</button></Link>
      </div>
    </div>
  )
}
