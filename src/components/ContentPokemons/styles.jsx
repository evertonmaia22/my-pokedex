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
    };
    
    button {
         position: relative;
         display: flex;
         justify-content: space-between;     
         border: none;
         padding: 0;
         top: -35px;
         left: 1250px;
         background-color: ${theme.colors.primaryWhite};
         cursor:pointer;

}

    input{
        width: 1088px;
        height: 53px;
        margin: 33px 0 0 215px;
        background: ${theme.colors.background};
        font-family: ${theme.fontStyle.primary};
        font-size: 15px;
        padding: 10px;
        border: 1px solid #F1F1F1;
        box-shadow: ${theme.colors.shadowBox};
        border-radius: 40px;

        &::placeholder{
        font-family: ${theme.fontStyle.primary};
        padding-left: 33px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      
        }
  
       
    }

`