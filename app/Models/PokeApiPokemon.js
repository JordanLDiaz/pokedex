export class PokeApiPokemon {
  constructor(data) {
    this.name = data.name
    this.weight = data.weight
    this.nickName = data.nickName
    this.img = data.img || data.sprites.front_default
    this.height = data.height
  }

  static ListTemplate(PokeApiPokemon) {
    return `<div class="col-12 selectable p-1" onclick="app.pokeApiPokemansController.getOnePokemon('${PokeApiPokemon.name}')"> ${PokeApiPokemon.name}</div>`
  }

  get ActiveTemplate() {
    return `
      <h2 class="col-12 text-center"> ${this.name} </h2>
      <h4 class="col-12 text-center"> ${this.nickName}</h4>
      <img src=" ${this.img}" class="col-12 img-fluid"></img>
      <h5 class="col-6 text-center">Weight : <span> ${this.weight}</span></h5>
      <h5 class="col-6 text-center">Height : <span> ${this.height} </span></h5>
    `
  }

  get PlaceholderTemplate() {
    return `
    <h2 class="text-center"> Please select a Pokemon from the list </h2>
    `
  }
}