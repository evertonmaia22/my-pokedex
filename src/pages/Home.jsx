import React from "react";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import { GlobalStyle } from "../styles/global";


export function Home() {
    return(
        <div>          
                <GlobalStyle />
                <Header />         
                <Dashboard />

        </div>
    )
}
