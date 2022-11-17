import { appState } from "../AppState.js";
import { myPokemansService } from "../Services/MyPokemansService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawMyPokemans() {
  let pokemans = appState.myPokemans
  let template = ''
  pokemans.forEach(p => template += p.MyPokemonTemplate)
  setHTML('my-pokemans', template)
}
export class MyPokemansController {
  constructor() {
    appState.on('myPokemans', _drawMyPokemans)
    this.getPokemans()
  }
  async getPokemans() {
    try {
      await myPokemansService.getPokemans()
    } catch (error) {
      Pop.error(error.message)
      console.log(error);
    }
  }

  setOnePokemon(id) {
    myPokemansService.setOnePokemon(id)
  }

  async addToPokedex() {
    try {
      await myPokemansService.addToPokedex()
    } catch (error) {
      Pop.error(error.message)
      console.log(error);
    }
  }
}