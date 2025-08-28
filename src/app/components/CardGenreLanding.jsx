import "../styles/CardGenreLanding.css";
import "../animations/microBalance.css";

const CardGenreLanding = ({ genre, imageUrl }) => {
  return (
    <div
      className="card-genre-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="halftone-genre-effect">
        <h2 className="title-genre">{genre}</h2>
      </div>
    </div>
  );
};

export default CardGenreLanding;