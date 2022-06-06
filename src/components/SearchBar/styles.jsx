import styled from "styled-components";
import theme from "../../styles/Theme";

export const Content = styled.div`


.show-pokemons{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fontStyle.primary};
};

h1{
    
    font-size: 40px;
};

p{
    
    margin: auto 50px;
    font-family: ${theme.fontStyle.primary};
    font-size: 30px;
    text-transform: uppercase;
};
`