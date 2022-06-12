import styled from "styled-components";
import theme from "../../styles/Theme";

export const Container = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;

 .pokemon-grid{
    
    display: grid;
    padding-left: 95px;
    margin: 40px 200px 18px 25px;
    gap: 18px;
    grid-template-columns: repeat(6, auto);
    


    
@media screen and (max-width: ${theme.breakpoints.notebook}) {
    display: grid;
    grid-template-columns: repeat(5, auto);
        padding-left: 15px;
        margin: 40px 0 0 0;

}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
    display: grid;
    grid-template-columns: repeat(4, auto);
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
    display: grid;
    grid-template-columns: repeat(3, auto);

}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    max-width: 50px;
}

&:focus{
    width: 100px;

}
    
}


 .thumb-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.secundaryWhite};
    border-radius: 15px;
    max-width: 162px;
    height: 110px;  
    

}
h1{
   
   width: 73.16px;
   height: 12.88px;
   margin: 33px 10px 10px 10px;
   text-transform: capitalize;
   font-family: ${theme.fontStyle.secundary};
   color: ${theme.colors.primaryWhite};
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 14px;
}

h2{
   display: flex;
   float: right;
   margin: -25px 0  ;
   width: 52.26px;
   height: 12.88px;
   font-family: ${theme.fontStyle.secundary};
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 14px;
   opacity: 0.5;
}

h3{
   display: flex;
   text-align: center;
   justify-content: center;
   background: ${theme.colors.primaryWhite};
   opacity: 0.4;
   margin: 10px 0 5px 10px;
   width: 45px;
   height: 16px;
   border-radius: 38px;
   text-transform: capitalize;
   font-family: ${theme.fontStyle.secundary};
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 15px;
}

img {

   margin: -48px 7.32px 0.99px 82px;
   width: 80px;
   height: 70px;

}
.load-button{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 231px;
   height: 50px;
   margin: 38px 0 0 530px;
   background: ${theme.colors.pantoneGreen};
   border: none;
   border-radius: 11px;
   font-family: ${theme.fontStyle.secundary};
   font-size: 15px;
   color: ${theme.colors.primaryWhite};
   font-weight: 700;
   cursor: pointer;
   transition: 0.2s;

@media screen and (max-width: ${theme.breakpoints.notebook}) {      
       margin: 20px 0 0 450px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
       width: 200px;
       margin: 20px 0 0 350px;
       font-size: 14px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        
       width: 180px;
       margin: 20px 0 0 250px;
       font-size: 12px;
       

}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
    
       margin: 20px 0 0 185px;
       
}
   &:hover{
   filter: brightness(0.9);
}
}

.grass {
   
    background-color:${theme.colorsTypePokemons.grass};
  
}
.fire {
    background-color: ${theme.colorsTypePokemons.fire};
}

.bug {    
    background-color: ${theme.colorsTypePokemons.bug};
}

.water {   
    background-color: ${theme.colorsTypePokemons.water};
}

.normal {   
    background-color: ${theme.colorsTypePokemons.normal};
}

.electric {  
    background-color: ${theme.colorsTypePokemons.eletric};
}

.poison {  
    background-color: ${theme.colorsTypePokemons.poison};
}

.ground {   
    background-color:${theme.colorsTypePokemons.ground};
}

.fairy {   
    background-color: ${theme.colorsTypePokemons.fairy};
}

.ghost {     
    background-color: ${theme.colorsTypePokemons.ghost};
}

.fighting {  
    background-color: ${theme.colorsTypePokemons.fighting};
}

.psychic {    
    background-color: ${theme.colorsTypePokemons.psychic}; 
}

.rock {   
    background-color: ${theme.colorsTypePokemons.rock}; 
}

.ice {   
    background-color: ${theme.colorsTypePokemons.ice};  
}

.dragon {    
    background-color: ${theme.colorsTypePokemons.dragon};
}



`