import { MyPokemansController } from "./Controllers/MyPokemansController.js";
import { PokeApiPokemansController } from "./Controllers/PokeApiPokemansController.js";

class App {
  pokeApiPokemansController = new PokeApiPokemansController();
  myPokemansController = new MyPokemansController();
}

window["app"] = new App();
