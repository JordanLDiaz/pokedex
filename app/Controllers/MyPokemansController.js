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
}