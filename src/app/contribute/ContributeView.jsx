import HeaderHome from "../components/LandingHeader";
import "./Contribute.css";

export default function Contribute() {
  return (
    <div className="page">
      <HeaderHome />

      <main className="contribute-page">
        <h1>Contribua com o projeto</h1>
        <p>
          Este é um projeto open source. Você pode contribuir enviando
          melhorias, reportando bugs ou sugerindo novas funcionalidades.
        </p>
        <a className="btn-contribute" href="https://github.com/ingrydf12/RecordsRepo" target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </a>
      </main>
    </div>
  );
}
