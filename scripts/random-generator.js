// Simple Pokemon Counter

// Set to track unique Pokemon guesses
const guessedPokemon = new Set();

// Function to update the counter display
function updateCounter() {
  const counterElement = document.getElementById("pokemonCounter");
  if (counterElement) {
    counterElement.textContent = `Pokémon guessed: ${guessedPokemon.size}`;
  }
}

// This script fetches Pokémon data from the PokeAPI and displays the Pokémon sprite based on user input. Had to modify the functionality to justify its addition to the profile page.
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    // Add the Pokemon to the guessed set (automatically handles duplicates)
    guessedPokemon.add(pokemonName.toLowerCase());

    // Update the counter display
    updateCounter();

    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
