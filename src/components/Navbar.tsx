import { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById("navbar");
          if (window.scrollY > 140) {
            navbar?.classList.add("fixed");
          } else {
            navbar?.classList.remove("fixed");
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

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
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <a href="/" >Logo</a>

                    </div>
                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href="/" className="nav-link">Bosh sahifa</a>
                        <a href="#" className="nav-link">Takliflar</a>
                        <a href="#" className="nav-link">Biz haqimizda</a>
                        <a href="#" className="nav-link">Bog'lanish</a>
                        <button className="nav-menu_close" onClick={() => setIsOpen(false)}>
                            <IoCloseOutline />
                        </button>
                    </ul>
                    <div className="nav-auth">
                        <a href="/login" className="nav-signin">Kirish</a>
                        <a href="/register" className="nav-signup">Ro'yxatdan o'tish</a>
                        <Link to={'/login'} className="nav-user">
                            <FaUserCircle color="#fff"/>
                        </Link>
                        <button className="nav-menu" onClick={() => setIsOpen(true)}>
                            <CgMenuRight fontSize={23} color="#fff" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar