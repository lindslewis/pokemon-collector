const Pokemon = require('./Pokemon')

class Trainer {
    constructor (name) {
        this.pokemon = []
        this.name = name;
    }
    addPokemon(name, hp, atk) {
        this.pokemon.push(new Pokemon (name, hp, atk));
    } 
    getRandomPokemon() {
        return this.pokemon[Math.floor(Math.random()*this.pokemon.length)]
    }
}

// const Turtwig = new Pokemon('Turtwig', 75, 10)

module.exports = Trainer