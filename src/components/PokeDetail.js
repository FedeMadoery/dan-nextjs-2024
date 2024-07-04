import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function PokeDetail() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="rounded-md overflow-hidden w-1/2">
        <CardContent className="flex text-center p-0">
          <div className="relative bg-orange-500 h-[250px] flex justify-center items-center">
            <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-semibold">
              HP 39
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
              alt="Charmander"
              className="h-[150px] w-[150px] object-contain"
            />
          </div>
          <div className="flex flex-col flex-1 justify-evenly px-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mt-4">Charmander</h2>
              <Badge
                variant="secondary"
                className="h-fit px-4 bg-orange-500 text-white"
              >
                fire
              </Badge>
            </div>
            <h4>
              Charmander is a Fire-type Pokémon. It has a flame on the tip of
              its tail that is connected to its life force. As Charmander grows
              stronger, the flame on its tail burns more intensely.
            </h4>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
