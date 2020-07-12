import React from "react"
import "./App.css"

function Helloworld(props){ //Componentes estaticos como funciones
    return(
    <div>
        <div id="hello">Hello world  {props.mytext}</div>
    <div>{props.subtitle}</div>
    </div>
    )
}

function App(){
    return(
        <div>Inicio <Helloworld mytext="he1" subtitle="subtitulo"/> <Helloworld mytext="he2"/> <Helloworld mytext="he3"/></div>
    )
}

export default App;