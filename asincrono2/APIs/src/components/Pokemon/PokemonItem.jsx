function PokemonItem({ name, sprites, types }) {
    return (
        <div className="pokemon-card">
            <h3 className="pokemon-card__title">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <img className="pokemon-card__image" src={sprites.front_default} alt={name} />
            <p className="pokemon-card__type">Tipo: {types[0].type.name}</p>

        </div>
    );
}

export default PokemonItem;


