// Function to fetch a paginated list of Pokémon
export async function fetchPokemonPage(limit, offset = 0) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
  }
}

// Function to fetch the next page
export  async function fetchNextPage(currentOffset, pageSize) {
  const nextOffset = currentOffset + pageSize;
  const nextPage = await fetchPokemonPage(pageSize, nextOffset);
  console.log("Next page Pokémon:", nextPage);
  return nextPage;
}

// Function to fetch details of a particular Pokémon
export async function fetchPokemonDetails(pokemonNameOrId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameOrId}`;

  try {
    // Fetch Pokémon basic details
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Fetch Pokémon species details for description
    const speciesResponse = await fetch(speciesUrl);
    if (!speciesResponse.ok) {
      throw new Error(`HTTP error! status: ${speciesResponse.status}`);
    }
    const speciesData = await speciesResponse.json();

    // Get the Pokémon description in English
    const description = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    ).flavor_text;

    // Format the Pokémon details
    const pokemonDetails = {
      name: data.name,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      description: description,
      picture: data.sprites.other["official-artwork"].front_default,
      stats: data.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
    };

    return pokemonDetails;
  } catch (error) {
    console.error("Failed to fetch Pokémon details:", error);
  }
}
