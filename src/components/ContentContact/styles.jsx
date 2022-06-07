import styled from "styled-components";
import theme from "../../styles/Theme";

export const Container = styled.div`

img {

    max-width: 720px;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
    max-width: 600px;

}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
    max-width: 550px;

}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
    max-width: 450px;

}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
    max-width: 400px;

}
}

    h1{
            float: right;
            margin: 180px 80px 0 50px;
            font-family: ${theme.fontStyle.secundary};
            font-size: 40px;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 30px;
        
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 22px;
        margin: 0 30px 30px -15px;
        
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 20px;
        margin: 0 30px 30px -15px;
        
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 18px;
        margin: 15px 200px 30px 0;
        
}

}

    button { 

    width: 231px;
    height: 66px;
    margin: -100px 10px 0 1000px;
    background: ${theme.colors.pantoneGreen};
    border:none;
    border-radius: 11px;
    font-family: ${theme.fontStyle.secundary};
    font-size: 20px;
    color: ${theme.colors.primaryWhite};
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        height: 60px;
        margin: 10px 0 0 100px;
        font-size: 18px;
        
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        height: 50px;
        font-size: 18px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        height: 50px;
        font-size: 18px;
        
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        height: 50px;
        font-size: 16px;
}

    &:hover{
    filter: brightness(0.9);
};

}

`