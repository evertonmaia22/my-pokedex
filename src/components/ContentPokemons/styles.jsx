import styled from "styled-components";
import theme from "../../styles/Theme";

export const Container = styled.div`
    
    p{
    margin-top: 73px;
    font-family: ${theme.fontStyle.secundary};
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 3px;
    text-align: center;
    
@media screen and (max-width: ${theme.breakpoints.notebook}) {
        font-size: 30px;
}
    @media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        font-size: 25px;
}
    @media screen and (max-width: ${theme.breakpoints.ipad}) {
        font-size: 20px;
}
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 15px;
           
}

};
    
    button {
         position: relative;
         display: flex;
         justify-content: space-between;     
         border: none;
         padding: 0;
         top: -35px;
         left: 1120px;
         background-color: ${theme.colors.primaryWhite};
         cursor:pointer;


@media screen and (max-width: ${theme.breakpoints.notebook}) {
        left: 850px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        left: 780px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        left: 530px;
        
}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
        top: -25px;
        left: 335px;                       
}

}

    input{
        width: 1088px;
        height: 53px;
        margin: 33px 0 0 110px;
        background: ${theme.colors.background};
        font-family: ${theme.fontStyle.primary};
        font-size: 15px;
        padding: 10px;
        border: 1px solid #F1F1F1;
        box-shadow: ${theme.colors.shadowBox};
        border-radius: 40px;

@media screen and (max-width: ${theme.breakpoints.notebook}) {
        width: 800px;
}
@media screen and (max-width: ${theme.breakpoints.ipadPro}) {
        width: 750px;
}
@media screen and (max-width: ${theme.breakpoints.ipad}) {
        width: 480px;
        
}
@media screen and (max-width: ${theme.breakpoints.mobile}) {
        width: 280px;
        margin: 0 0 0 105px;
        padding: 0;
        height: 30px;                        
}

        &::placeholder{
        font-family: ${theme.fontStyle.primary};
        padding-left: 33px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

@media screen and (max-width: ${theme.breakpoints.mobile}) {
        width: 280px;
        margin: 0 0 0 105px;
        padding: 0;
        height: 30px;     
        font-size: 13px;                   
}
}
       
}

`