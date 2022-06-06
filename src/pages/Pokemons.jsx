import React from "react";
import ContentPokemons from "../components/ContentPokemons";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";


export function Pokemons() {
    return(
        
        <div>   
            
             <GlobalStyle />     
             <Header />           
             <ContentPokemons /> 
            
        </div>
    )
}