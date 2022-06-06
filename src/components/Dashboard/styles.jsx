import styled from 'styled-components'
import theme from "../../styles/Theme";

export const Container = styled.div`
    
    width: 100vh;
    display: flex;
    margin: 198px 821px 550px 165px;
    font-family: ${theme.fontStyle.secundary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.auttarGray};


    img{

        margin: -150px 0 -500px 445px;
        width: 888px;
        height: 678px;
        top: 40px;
        
    @media screen and (max-width: ${theme.breakpoints.notebook}) {
        max-width: 580px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        max-width: 385px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        max-width: 200px;
        margin: -150px 0 0 230px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        max-width: 170px;
        margin: -135px 0 0 150px;
}
        
        
    }
    .selectedBg{
        
        background: linear-gradient(to bottom, ${theme.colors.primaryWhite} 50%, ${theme.colors.primaryYellow} 50% );

        }


    h1{
       
        position: absolute;
        width: 454px;
        height: 152px;
        left: 165px;
        top: 198px;
        font-style: normal;
        font-weight: 800;
        font-size: 54px;
        line-height: 76px;
        
@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 40px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 35px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 30px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 20px;
        margin: 0 15px 0 -65px ;    
}

}

    p{
        position: absolute;
        width: 438px;
        height: 72px;
        left: 165px;
        top: 368px;
        font-family: ${theme.fontStyle.secundary};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;
        letter-spacing: 0.02em;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 14px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 12px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 12px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 12px;
        margin: 0 0 0 -90px ;
}
    
}   
    button{

        position: absolute;
        width: 231px;
        height: 66px;
        margin: 198px 821px 550px 2.5px;
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

    @media screen and (max-width: ${theme.breakpoints.notebook}) {
        max-width: 200px;
        height: 55px;
        font-size: 18px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        max-width: 180px;
        height: 45px;
        font-size: 16px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        max-width: 160px;
        height: 35px;
        font-size: 14px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        max-width: 140px;
        height: 25px;
        font-size: 12px;
        margin: 0 10px 0 10px;
}
           
}
  
    
`