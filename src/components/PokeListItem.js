/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EwguRRxg7Ci
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchPokemonDetails } from "@/lib/poke-helper";

export default async function PokeListItem({name}) {
  const pokemon = await fetchPokemonDetails(name)
  
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <Card className="w-[300px]">
        <div className="relative bg-orange-500 h-[250px] rounded-t-lg flex justify-center items-center">
          <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-semibold">
            HP 39
          </div>
          <img
            src={pokemon.picture}
            alt={pokemon.name}
            className="h-[150px] w-[150px] object-contain"
          />
        </div>
        <CardContent className="text-center">
          <h2 className="text-xl font-bold mt-4">{pokemon.name}</h2>
          <Badge variant="secondary" className="mt-2 bg-orange-500 hover:bg-orange-300 text-white">
            {pokemon.types[0]}
          </Badge>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <p className="text-lg font-bold">52</p>
              <p className="text-sm text-muted-foreground">Attack</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">43</p>
              <p className="text-sm text-muted-foreground">Defense</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">65</p>
              <p className="text-sm text-muted-foreground">Speed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
