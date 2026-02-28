import "./App.css";
import PokemonForm from "./components/PokemonForm";
import PokemonsList from "./components/PokemonList";
import { useState, useEffect } from "react";
import { getAllData } from "./services/get";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const pokemonList = await getAllData();
    setPokemon(pokemonList);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchPokemon();
    };
    getData();
  }, []);

  return (
    <>
      <PokemonForm fetchPokemon={fetchPokemon} />
      <PokemonsList pokemon={pokemon} />
    </>
  );
}

export default App;
