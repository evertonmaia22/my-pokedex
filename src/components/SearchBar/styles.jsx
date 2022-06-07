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

img{
        width: 250px;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        width: 180px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        width: 150px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        width: 130px;

}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
        width: 120px;       
        margin: 0 0 0 -20px ;                      
}

}

h1{   

        font-size: 40px;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 35px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 30px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 25px;
        
}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 20px;                     
}
};

p{
    
    margin: auto 50px;
    font-family: ${theme.fontStyle.primary};
    font-size: 30px;
    text-transform: uppercase;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 25px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 20px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 15px;
        
}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 15px;                     
}
   
};
`