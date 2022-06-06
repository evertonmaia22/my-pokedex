import React from "react"
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { ContentContact} from "../components/ContentContact"


export function Contact () {

    return(
        <div>   
            
        <Header/>        
        <GlobalStyle />  
        <ContentContact />
            
        </div>
    )
}
