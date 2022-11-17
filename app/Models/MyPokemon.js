export class MyPokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.weight = data.weight
    this.nickName = data.nickName
    this.img = data.img
    this.height = data.height
  }

  get MyPokemonTemplate() {
    return `
    <div class="col-12 p-1 bg-success selectable" onclick="app.myPokemansController.setOnePokemon('${MyPokemon.id}')"> ${MyPokemon.name}</div>
    `
  }
}