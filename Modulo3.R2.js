import { defaultTo } from "lodash";
import React from "react";
import Nav from "./Componentes/navMod3R1";
import Cartas from "./Componentes/mainCartas";
import Footer from "./Componentes/footer";



export default function App (){
    return(
        <>
            <Nav/>
            <main>
                <div className="pricing">
                    <h1>Pricing</h1>
                    <h3>Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.</h3>
                </div>
                 <Cartas/>
                {/* <Main/> */}
            </main><hr style={{width:"65%"}}/>
            <Footer/>
        </>
    )
}