import React from "react"
import "./App.css"

// function Helloworld(props){ //Componentes estaticos como funciones
//     return(
//     <div>
//         <div id="hello">Hello world  {props.mytext}</div>
//     <div>{props.subtitle}</div>
//     </div>
//     )
// }

class Helloworld extends React.Component{ //clase helloworld que hereda  las propiedades de un componente
    state={ //
        show:true
    }
    toggle=() =>{
            this.setState({show:!this.state.show})

    }
    render(){
        if(this.state.show){
            return(
                <div>
                    <div id="hello">Hello world  {this.props.mytext}</div>
                    <div>{this.props.subtitle}</div>
                    <button onClick={this.toggle}>toggle show</button>
                </div>
                )
        }else{
            return(
                <div>
                    <h1>No hay elementos</h1>
                    <button onClick={this.toggle}>toggle show</button>
                </div>
            )
        }
        
    }
}

function App(){
    return(
        <div>Inicio <Helloworld mytext="he1" subtitle="subtitulo"/> <Helloworld mytext="he2"/> <Helloworld mytext="he3"/></div>
    )
}

export default App;