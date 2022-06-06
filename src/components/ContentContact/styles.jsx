import styled from "styled-components";
import theme from "../../styles/Theme";

export const Container = styled.div`

        h1{
            float: right;
            margin: 200px 180px 0 50px;
            font-family: ${theme.fontStyle.secundary};
            font-size: 40px;
        }

    button { 

    width: 231px;
    height: 66px;
    margin: 0 10px 0 1050px;
    background: ${theme.colors.pantoneGreen};
    border:none;
    border-radius: 11px;
    font-family: ${theme.fontStyle.secundary};
    font-size: 20px;
    color: ${theme.colors.primaryWhite};
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
    filter: brightness(0.9);
};

}

`