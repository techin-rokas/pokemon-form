import Pokemon from "./Pokemon";

function PokemonsList({ pokemon, deletePokemon }) {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {pokemon.map((p) => (
          <Pokemon key={p.id} 
          pokemon={p} deletePokemon={deletePokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonsList;
