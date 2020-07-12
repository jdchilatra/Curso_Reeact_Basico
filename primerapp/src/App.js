//import React from "react" //se importa react completo
import React,{ Component } from "react"
import "./App.css"

import task from "./sample/task.json"
import Tasks from "./Components/Tasks"
import TaskForm from "./Components/TaskForm"

console.log(task)
//class App extends React.Components  // se usa React.Components cuando se importa React

class App extends Component {
    state={
        tasks:task
    }
    //data=(e) => <p> {e.title} - {e.description} - {e.done}</p>
    render(){// cada vez que se usa la función map se debe agregar la propiedad key al elemento retornado para que no se genere el warning
        return(
            <div>
                <TaskForm/>
                <Tasks tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default App;