import { Link } from "react-router-dom"
import { FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to={'/'}>Logo</Link>
                    </div>

                    <div className="footer-text">
                        <p className="footer-title">Biz haqimizda ko'proq ma'lumotga ega bo'lish uchun ijtimoiy tarmoqdagi sahifalarimizga obuna bo'ling</p>
                    </div>

                    <ul className="footer-links">
                        <Link to={'/'}>
                            <FaTelegram  className="footer-icon" />
                        </Link>

                        <Link to={'/'}>
                            <RiInstagramFill  className="footer-icon" />
                        </Link>

                        <Link to={'/'}>
                            <FaYoutube  className="footer-icon" />
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer