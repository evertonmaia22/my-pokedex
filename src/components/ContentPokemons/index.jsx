import React from "react";
import { SearchBar } from "../SearchBar";
import { Container } from "./styles";


export function ContentPokemons(){

     return(
         <Container>                   
        <div>          
                 <p>Mais de 250 Pokemons para você escolher o seu favorito</p>
                 <SearchBar />                        
        </div>
        </Container>
    )
}

   