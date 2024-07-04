import PokeListItem from "@/components/PokeListItem";
import { fetchPokemonPage } from "@/lib/poke-helper";

export default async function PokeList() {

  const lista = await fetchPokemonPage(10)

  return <div>
    <p>Agregar una lista </p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {lista.map((pokemon) => {
          return <PokeListItem name={pokemon.name} key={pokemon.name} />
        })}
      </div>
    </div>;
}
