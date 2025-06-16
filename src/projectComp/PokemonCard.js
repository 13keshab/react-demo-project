export const PokemonCard = ({ item }) => {
  return (
    <div className="pokemon-card">
      <h2>{item.name}</h2>
      <figure>
        <img
          src={item.sprites.other.dream_world.front_default}
          alt={item.name}
          className="pokemon-image"
        />
      </figure>
      <h2>{item.name}</h2>
      <p>Height: {item.height}</p>
      <p>Weight: {item.weight}</p>
      <p>Base Experience: {item.base_experience}</p>
      <p>Abilities:</p>
    </div>
  );
};
