import { getPokemonNum } from "../lib/pokemonAPI";
import Button from "./Button";
import Searchbar from "./SearchBar";

interface PokemonListProps
{
  pokemonList: any
  searchQuery?: any
}

export default async function PokemonList({pokemonList, searchQuery} : PokemonListProps) { //Header(props: string)

    /* if(searchQuery){
      console.log(searchQuery)
    } */

    async function showPokemon(){ 
      'use server'

      if(searchQuery){
        pokemonList?.filter(function (pokemon){
          if(pokemon.name == searchQuery) return pokemon
      }).map((pokemon) => (
          <>
          <Button linkRef={getPokemonNum(pokemon.url, 4)} textData={pokemon.name}></Button>
          <br/>
          </>
      ))
      }
    }

          return  (
              <>

                

                {pokemonList?.filter(function (pokemon){
          if(pokemon.name == searchQuery.toLowerCase()) return pokemon
      }).map((pokemon) => (
          <>
          <Button linkRef={getPokemonNum(pokemon.url, 4)} textData={pokemon.name}></Button>
          <br/>
          </>
      ))}
              </>
      );
    }