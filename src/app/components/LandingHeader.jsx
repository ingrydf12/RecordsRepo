import Image from "next/image";
import "../styles/HeaderLanding.css";
import Link from "next/link";

const HeaderHome = () => {
  return (
    <header className="header">
      <Link href="/" className="logotipo">
        <Image
          src="/logoAberto.png"
          alt="Records Repository Icon"
          width={150}
          height={150}
          className="logo"
        />
        <p>RecordsRepo</p>
      </Link>

      <nav className="nav">
        <ul className="header-links">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#discovery">Explore</a>
          </li>
          <li>
            <Link href="/contribute">Contribuir</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderHome;
