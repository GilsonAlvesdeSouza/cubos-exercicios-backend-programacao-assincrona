import { Request, Response } from "express";
const { listarPokemons, detalharPokemon } = require("utils-playground");

class PokemonController {
  async index(req: Request, res: Response) {
    const pag = req.query.pag;
    const pokemons = await listarPokemons(pag);
    res.json(pokemons);
  }

  async show(req: Request, res: Response) {
    const name_id = req.params.name_id as string;

    let pokemon: any = {};

    if (Number(name_id)) {
      pokemon = await detalharPokemon(Number(name_id));
    } else {
      pokemon = await detalharPokemon(name_id);
    }

    if (!pokemon) {
      return res.status(404).json({ mensagem: "Nenhum pokemon encontrado." });
    }

    const result = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,

      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    };

    res.json(result);
  }
}

export { PokemonController };
