import React, { useState } from "react";
import { Container } from "../ContentPokemons/styles";
import searchIconImg from '../../assets/searchIcon.svg'
import { searchPokemon } from "../../api"
import { Content } from './styles'

export function SearchBar() {

    const [pokemon, setPokemon] = useState()
    const [search, setSearch] = useState("pikachu")
    
    const onChangeHandler = (e) => {
        setSearch(e.target.value)

    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)

    }

    const onSearchHandler = async (pokemon) => {

        const result = await searchPokemon(pokemon)
        setPokemon(result)
        
    }

    return (
        <div>
            <span>
                <Container>
                    <input type="search" placeholder="Pesquisar Pokémon" onChange={onChangeHandler} />
                    <button type="button" onClick={onButtonClickHandler}> <img src={searchIconImg} height="20" width="" alt="botao" />.</button>

                </Container>
            </span>
            {pokemon ? (
                <Content>
                    <div className="show-pokemons">
                        <div><h1>Nome:</h1> <p>{pokemon.name}</p> </div>
                        <div><h1>Peso:</h1> <p>{pokemon.weight}</p> </div>
                        <div><h1>Tipo:</h1> <p>{pokemon.types[0].type.name}</p> </div>

                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    </div>
                </Content>
            ) : null}


        </div>
    )
}