import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LoginNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = ""; 
        }
      }, [isOpen]);
    return (
        <nav id="navbar" className="nav">
            <div className={isOpen ? "nav-bg active" : "nav-bg"} onClick={() => setIsOpen(false)}></div>
            <div className="nav-login_container">
                <div className="nav-login_content">
                    <div className="nav-logo">
                        <a href="/">Logo</a>
                    </div>
                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href="/" className="nav-login_link">Bosh sahifa</a>
                        <a href="#" className="nav-login_link">Takliflar</a>
                        <a href="#" className="nav-login_link">Biz haqimizda</a>
                        <a href="#" className="nav-login_link">Bog'lanish</a>
                        <button className="nav-menu_close" onClick={() => setIsOpen(false)}>
                            <IoCloseOutline />
                        </button>
                    </ul>
                    <div className="nav-auth">
                        <Link to={'/login'} className="nav-login_signin">Kirish</Link>
                        <Link to={'/register'} className="nav-signup">Ro'yxatdan o'tish</Link>
                        <Link to={'#'} className="nav-user">
                            <FaUserCircle />
                        </Link>
                        <button className="nav-menu" onClick={() => setIsOpen(true)}>
                            <CgMenuRight fontSize={23} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default LoginNavbar