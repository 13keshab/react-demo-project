import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [data, setData] = useState([]);
  const [inpSearch, setInpSearch] = useState("");
  const fetchApiData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (eachData) => {
        const res = await fetch(eachData.url);
        const data = await res.json();
        return data;
      });
      const detailedResponses = await Promise.all(detailedPokemonData);
      setData(detailedResponses);
      console.log(detailedResponses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  const filterdData = data.filter((item) => {
    return item.name.toLowerCase().includes(inpSearch.toLowerCase());
  });
  return (
    <div className="container">
      <h1>Pokemaon Class</h1>
      <input
        type="search"
        placeholder="Search"
        className="search"
        onChange={(e) => {
          setInpSearch(e.target.value);
        }}
      />

      <div className="grid-three-cols cards">
        {filterdData.map((item, index) => {
          return <PokemonCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
