import { Link } from 'react-router-dom'
import img from '../assets/images/admin.png'
const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="about-content">
          <div className="about-texts">
            <h1 className="about-info_title">Futbol maydoningiz bormi?</h1>
            <p className="about-info_subtitle">
              Bizning <span className='about-span'>Gazon top</span> loyihamiz orqali biznesingizni avtomatlashtiring. Biz bilan bog'lanish va hamkorlik uchun aloqa sahifasiga o'ting
            </p>
            <Link to={'#'} className='about-link'>
              Hamkorlik
            </Link>

          </div>
          <div className="about-image">
            <img src={img} loading='lazy' className='about-img' alt="admin img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About