import { Link } from 'react-router-dom'
import stadium from '../assets/images/stadium.webp'
import { FaLocationDot } from "react-icons/fa6"
import { CgRuler } from "react-icons/cg"
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const Recommend = () => {
  return (
    <section className="recommend" aria-labelledby="recommend-heading">
      <div className="container">
        <div className="recommend-content">
          <motion.h2
            id="recommend-heading"
            className="recommend-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tavsiya etiladi
          </motion.h2>

          <div className="recommend-cards" role="list">
            {[1, 2, 3].map((i) => (
              <motion.article
                key={i}
                className="recommend-card"
                role="listitem"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={stadium}
                  className="recommend-card_img"
                  loading="lazy"
                  alt="Stadion rasmi"
                />
                <div className="recommend-texts">
                  <div className="recommend-items">
                    <h3 className="recommend-name">
                      {i === 0 ? 'Gazon' : i === 1 ? 'Futzal' : 'Dim shiqqi'}
                    </h3>
                    <p className="recommend-price">
                      {i === 0 ? "90 ming so'm" : i === 1 ? "110 ming so'm" : "120 ming so'm"}
                    </p>
                  </div>
                  <address className="recommend-info">
                    <p className="recommend-location">
                      <FaLocationDot />
                      <span>
                        {i === 0 ? 'Xorazm Palace' : i === 1 ? '5-son maktab' : 'Dim addushi'}
                      </span>
                    </p>
                    <p className="recommend-length">
                      <CgRuler />
                      <span>Uzunligi: 20m, 25m</span>
                    </p>
                  </address>
                  <Link to="#" className="recommend-book_link">
                    Bron qilish
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recommend
