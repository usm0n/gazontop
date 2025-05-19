import { Link } from 'react-router-dom'
import stadium from '../assets/images/stadium.webp'
import { FaLocationDot } from "react-icons/fa6";
import { CgRuler } from "react-icons/cg";

const Recommend = () => {
  return (
    <section className="recommend" aria-labelledby="recommend-heading">
      <div className="container">
        <div className="recommend-content">
          <h2 id="recommend-heading" className="recommend-title">Tavsiya etiladi</h2>

          <div className="recommend-cards" role="list">
            {/* CARD 1 */}
            <article className="recommend-card" role="listitem">
              <img
                src={stadium}
                className="recommend-img"
                loading="lazy"
                alt="Gazon stadioni surati"
              />
              <div className="recommend-texts">
                <div className="recommend-items">
                  <h3 className="recommend-name">Gazon</h3>
                  <p className="recommend-price" aria-label="Narxi 90 ming so'm">90 ming so'm</p>
                </div>
                <address className="recommend-info">
                  <p className="recommend-location">
                    <FaLocationDot aria-hidden="true" />
                    <span>Manzil: Xorazm Palace</span>
                  </p>
                  <p className="recommend-length">
                    <CgRuler aria-hidden="true" />
                    <span>Uzunligi: 20m, 25m</span>
                  </p>
                </address>
                <Link to={'#'} className="recommend-book_link" aria-label="Gazon maydonini bron qilish">
                  Bron qilish
                </Link>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="recommend-card" role="listitem">
              <img
                src={stadium}
                className="recommend-img"
                loading="lazy"
                alt="Futzal stadioni surati"
              />
              <div className="recommend-texts">
                <div className="recommend-items">
                  <h3 className="recommend-name">Futzal</h3>
                  <p className="recommend-price">110 ming so'm</p>
                </div>
                <address className="recommend-info">
                  <p className="recommend-location">
                    <FaLocationDot aria-hidden="true" />
                    <span>Manzil: 5-son maktab</span>
                  </p>
                  <p className="recommend-length">
                    <CgRuler aria-hidden="true" />
                    <span>Uzunligi: 20m, 25m</span>
                  </p>
                </address>
                <Link to={'#'} className="recommend-book_link" aria-label="Futzal maydonini bron qilish">
                  Bron qilish
                </Link>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="recommend-card" role="listitem">
              <img
                src={stadium}
                className="recommend-img"
                loading="lazy"
                alt="Dim shiqqi stadioni surati"
              />
              <div className="recommend-texts">
                <div className="recommend-items">
                  <h3 className="recommend-name">Dim shiqqi</h3>
                  <p className="recommend-price">120 ming so'm</p>
                </div>
                <address className="recommend-info">
                  <p className="recommend-location">
                    <FaLocationDot aria-hidden="true" />
                    <span>Manzil: Dim addushi</span>
                  </p>
                  <p className="recommend-length">
                    <CgRuler aria-hidden="true" />
                    <span>Uzunligi: 20m, 25m</span>
                  </p>
                </address>
                <Link to={'#'} className="recommend-book_link" aria-label="Dim shiqqi maydonini bron qilish">
                  Bron qilish
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recommend

