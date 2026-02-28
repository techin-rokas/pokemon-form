import axios from "axios";
import { getOne } from "./get";
import Pokemon from "../components/Pokemon";

const API_URL = import.meta.env.VITE_API_URL;

const deleteData = async (id) => {
  const pokemon = await getOne(id);

  const confirmed = window.confirm(
    `Are you sure you want to delete ${pokemon.name}?`,
  );
  if (!confirmed) {
    return;
  }

  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default deleteData;
