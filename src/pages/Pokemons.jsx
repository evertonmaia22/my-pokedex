import React from "react";
import { ContentPokemons } from "../components/ContentPokemons";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { useEffect, useState } from "react";
import PokemonThumnail from "../components/PokemonThumnail";
import { Container } from "../components/PokemonThumnail/styles";


export function Pokemons() {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=18')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
    }
    useEffect(() => {
        getAllPokemons()
        //eslint-disable-next-line
    }, [])
    
    return (
        <div>

            <GlobalStyle />
            <Header />
            <ContentPokemons />
            <Container>
            <div className="pokemon-grid">
                {allPokemons.map((pokemon, index) =>
                    <PokemonThumnail
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                        key={index}
                    />
                )} 
            </div>
            <div>
                <button className="load-button" onClick={() => getAllPokemons()}>Carregar mais Pokemons</button>
            </div>
            </Container>
                    

        </div>
    )
}