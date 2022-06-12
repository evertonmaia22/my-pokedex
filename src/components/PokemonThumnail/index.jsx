import React from "react";
import { Container } from "./styles";

const PokemonThumnail =({id, name, image, type}) => {
    const style = `thumb-container ${type}`
    return(
        <Container>
        <div className={style}>
            <div>
                <h2>#00{id}</h2>
                <h1>{name}</h1>      
            </div>
            <div>
            <h3>{type}</h3>
            </div>
            <img src={image} alt={name} />
        </div>
        </Container>
    )
}
export default PokemonThumnail