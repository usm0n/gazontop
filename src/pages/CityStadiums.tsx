import { FaLocationDot } from 'react-icons/fa6'
import stadium from '../assets/images/stadium.webp'
import { CgRuler } from 'react-icons/cg'
import { Link, useParams } from 'react-router-dom'
import { useStadium } from '../data/stadium'
import LoginNavbar from '../components/LoginNavbar'

const CityStadiums = () => {
    const stadiumData = useStadium();
    const { id } = useParams();
    const stadiumID = stadiumData[id as keyof typeof stadiumData];
    return (
        <>
            <LoginNavbar />
            <section className="stadium">
                <div className='container'>
                    <div className="stadium-content">
                        <h1 className="recommend-title">{stadiumID.city}da joylashgan gazonlar</h1>
                        <div className="stadium-cards">
                            <article className="recommend-card stadium-card" role="listitem">
                                <img
                                    src={stadium}
                                    className="stadium-img"
                                    loading="lazy"
                                    alt="Gazon stadioni surati"
                                />
                                <div className="recommend-texts">
                                    <div className="recommend-items">
                                        <h3 className="recommend-name">{stadiumID.name}</h3>
                                        <p className="recommend-price" aria-label="Narxi 90 ming so'm">90 ming so'm</p>
                                    </div>
                                    <address className="recommend-info">
                                        <p className="recommend-location">
                                            <FaLocationDot aria-hidden="true" />
                                            <span>Manzil: {stadiumID.location}</span>
                                        </p>
                                        <p className="recommend-length">
                                            <CgRuler aria-hidden="true" />
                                            <span>Uzunligi: {stadiumID.length}</span>
                                        </p>
                                    </address>
                                    <Link to={'#'} className="recommend-book_link" aria-label="Gazon maydonini bron qilish">
                                        Bron qilish
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CityStadiums