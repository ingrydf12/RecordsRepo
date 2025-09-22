import Image from "next/image";
import "../styles/HeaderLanding.css"

const HeaderHome = () => {
  return (
    <header className="header">
      <Image src="/logotipo.svg" alt="Records Repository Icon" width={150} height={150} className="logo" />

      <nav className="nav">
        <ul className="header-links">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#discovery">Explore</a>
          </li>
          <li>
            <a href="#contribue">Contribua</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderHome;