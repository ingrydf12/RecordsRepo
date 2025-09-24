import { useState } from "react";
import Image from "next/image";
import "../styles/HeaderLanding.css";
import Link from "next/link";

const HeaderHome = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className={`header ${navIsOpen ? "pad-bottom" : ""}`}>
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

      {!navIsOpen ? (
        <button className="menu-btn" onClick={() => setNavIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ) : (
        <button
          className="menu-btn close-btn"
          onClick={() => setNavIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <nav className="nav">
        <ul className={`header-links ${navIsOpen ? "show" : "hide"}`}>
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
