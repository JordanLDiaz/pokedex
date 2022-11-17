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

}

export const myPokemansService = new MyPokemansService();