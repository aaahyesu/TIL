import { Link } from "react-router-dom";
import style from "../css/Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleResize = () => {
    const newIsMobile = window.innerWidth < 800;
    setIsMobile(newIsMobile);
    if (!newIsMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMobile, isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`${style.Header} mw`}>
      <h1>
        <a href="/">
          <img className={style.logoImg} src="/img/logo.svg" alt="로고" />
        </a>
      </h1>
      <nav className={`${isMenuOpen ? style.on : ""}`}>
        <div className={style.gnb}>
          <Link to="/shop">SHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/our">OUR STORY</Link>
        </div>
        <div className={style.person}>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>
      <button className={style.btn} onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
