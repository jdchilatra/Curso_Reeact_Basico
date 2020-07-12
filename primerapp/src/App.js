import React from "react"
import "./App.css"

function Helloworld(props){ //Componentes estaticos como funciones
    return(
    <div id="hello">Hello world  {props.mytext}</div>
    )
}

function App(){
    return(
        <div>Inicio <Helloworld mytext="he1"/> <Helloworld mytext="he2"/> <Helloworld mytext="he3"/></div>
    )
}

export default App;