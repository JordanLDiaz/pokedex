// 
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  pokeApiPokemans = []
  /** @type {import('./Models/PokeApiPokemon.js').PokeApiPokemon | null} */
  activePokemon = null

  /** @type {import('./Models/MyPokemon').MyPokemon[]} */
  myPokemans = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
