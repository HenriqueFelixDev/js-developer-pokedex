export class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}

export class PokemonWithDetails extends Pokemon {
    species;
    height;
    weight;
    abilities;
    hp;
    attack;
    defense;
    specialAttack;
    specialDefense;
    speed;
    total;
}