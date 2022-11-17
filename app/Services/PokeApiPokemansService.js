import { appState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";

// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

class PokeApiPokemansService {
  async getOnePokemon(name) {
    const res = await pokeApi.get(name)
    console.log('[GET ONE POKEMON]', res.data);
    appState.activePokemon = new PokeApiPokemon(res.data)
    console.log('new pokemon', appState.activePokemon);
  }
  async getPokeApiPokemans() {
    const res = await pokeApi.get()
    console.log('[POKE API GET POKEMANS]', res.data);
    appState.pokeApiPokemans = res.data.results
  }

}



export const pokeApiPokemansService = new PokeApiPokemansService()