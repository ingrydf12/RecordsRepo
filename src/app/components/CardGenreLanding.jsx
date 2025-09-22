import "../styles/CardGenreLanding.css";

const CardGenreLanding = ({ genre, imageUrl, style }) => {
  return (
    <div
      className="card-genre-container"
      style={{
        "--bg-image": `url(${imageUrl})`,
        ...style,
      }}
    >
      <div className="halftone-genre-effect">
        <h2 className="title-genre">{genre}</h2>
      </div>
    </div>
  );
};

export default CardGenreLanding;