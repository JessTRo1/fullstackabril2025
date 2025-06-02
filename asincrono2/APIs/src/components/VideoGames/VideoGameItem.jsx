function VideoGameItem({ name, released, background_image }) {
  return (
    <div className="videogame-card">
      <h3 className="videogame-card__title">{name}</h3>
      <img className="videogame-card__image" src={background_image} alt={name} />
      <p className="videogame-card__release">Lanzamiento: {released}</p>
    </div>
  );
}

export default VideoGameItem;
