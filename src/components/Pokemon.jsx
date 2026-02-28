import deleteData from "../services/delete";

function Pokemon({ pokemon }) {
  const type = Array.isArray(pokemon.type)
    ? pokemon.type
    : pokemon.type
      ? [pokemon.type]
      : [];

  return (
    <div className="border p-2 flex flex-col items-center text-center">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.img} alt={pokemon.name} width="100" />
      <p>
        Type:{" "}
        {type.length ? type.map((t) => <span key={t}> {t}</span>) : "Unknown"}
      </p>

      <button
        className="button bg-red-100"
        onClick={() => deleteData(pokemon.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Pokemon;
