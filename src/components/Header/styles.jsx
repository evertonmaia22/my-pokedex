import styled from "styled-components";
import theme from "../../styles/Theme";

export const Container = styled.div`

    display: flex;
    justify-content: space-evenly;
    height: 93px;
    font-family: ${theme.fontStyle.primary};
    background-color: ${theme.colors.background};
    box-shadow: ${theme.colors.shadowBox};

img{   
    position: absolute;
    margin-left: 20px;
    width: 159px;
    height: 60px;
    top: 14px;
    left: 157px;
    cursor: pointer;

    @media screen and (max-width: ${theme.breakpoints.notebook}) {
        max-width: 150px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        max-width: 120px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        max-width: 90px;
        margin: 0 10px 0 -50px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        max-width: 75px;
        margin: 35px 0 0 75px;      
}

}

a, nav{    
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background: none;
    font-family: ${theme.fontStyle.primary};
    color: ${theme.colors.text};
    margin: 15px 0 41px 35px; 
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;   

    a:hover {        
        text-decoration: underline;
    } 

 
@media screen and (max-width: ${theme.breakpoints.desktop}) {
        font-size: 23px;
}
@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 20px ;
        margin: 15px;      
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 15px;
        margin: 15px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 14px;
        margin: 15px 5px;
}

}

`
