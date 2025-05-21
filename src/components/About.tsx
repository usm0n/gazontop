import { Link } from 'react-router-dom';
import img from '../assets/images/admin.png';
import { motion } from 'framer-motion'; // 👉 Framer Motion import

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        {/* Bosh kontent animatsiyalangan */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Matn qismi alohida animatsiya bilan */}
          <motion.div
            className="about-texts"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="about-info_title">Futbol maydoningiz bormi?</h1>
            <p className="about-info_subtitle">
              Bizning <span className='about-span'>Gazon top</span> loyihamiz orqali biznesingizni avtomatlashtiring. Biz bilan bog'lanish va hamkorlik uchun aloqa sahifasiga o'ting
            </p>
            <Link to={'#'} className='about-link'>
              Hamkorlik
            </Link>
          </motion.div>

          {/* Rasm qismi alohida animatsiya bilan */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={img} loading='lazy' className='about-img' alt="admin img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
