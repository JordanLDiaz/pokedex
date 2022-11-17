import { appState } from "../AppState.js";
import { MyPokemon } from "../Models/MyPokemon.js";

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jordan/pokemon'
})


class MyPokemansService {

  async getPokemans() {
    const res = await sandboxApi.get()
    console.log('[Sandbox pokemon GET]', res.data);
    appState.myPokemans = res.data.map(p => new MyPokemon(p))
  }
  setOnePokemon(id) {
    let pokemon = appState.myPokemans.find(p => p.id == id)
    appState.activePokemon = pokemon
  }

  async addToPokedex() {
    let pokemon = appState.activePokemon
    const res = await sandboxApi.post('', pokemon)
    console.log('[ADD POKEMON]', res.data);
    appState.myPokemans = [...appState.myPokemans, new MyPokemon(res.data)]
  }
}

export const myPokemansService = new MyPokemansService();