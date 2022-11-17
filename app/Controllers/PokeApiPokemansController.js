import { appState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokeApiPokemansService } from "../Services/PokeApiPokemansService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawApiPokemans() {
  let pokeApiPokemans = appState.pokeApiPokemans
  let template = ''
  pokeApiPokemans.forEach(p => template += PokeApiPokemon.ListTemplate(p))
  setHTML('poke-api-pokemans', template)
}
function _drawActivePokemon() {
  let pokemon = appState.activePokemon
  if (pokemon) {
    setHTML('active-pokemon', pokemon.ActiveTemplate)
  } else {
    setHTML('active-pokemon', PokeApiPokemon.PlaceholderTemplate)
  }
}
export class PokeApiPokemansController {
  constructor() {
    appState.on('pokeApiPokemans', _drawApiPokemans)
    appState.on('activePokemon', _drawActivePokemon)
    this.getPokeApiPokemans()
  }

  async getPokeApiPokemans() {
    try {
      await pokeApiPokemansService.getPokeApiPokemans()
    } catch (error) {
      Pop.error(error.message)
      console.log(error);
    }
  }


  async getOnePokemon(name) {
    try {
      console.log(name);
      await pokeApiPokemansService.getOnePokemon(name)
    } catch (error) {
      Pop.error(error.message)
      console.log(error);
    }
  }


}