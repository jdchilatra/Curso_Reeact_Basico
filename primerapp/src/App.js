//import React from "react" //se importa react completo
import React,{ Component } from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import "./App.css"

import task from "./sample/task.json"
import Tasks from "./Components/Tasks"
import TaskForm from "./Components/TaskForm"
import Post from "./Components/Posts"

console.log(task)
//class App extends React.Components  // se usa React.Components cuando se importa React

class App extends Component {
    state={
        tasks:task
    }

    addTask = (title,description) => {
        console.log(title,description)
        const newTask={
            title:title,
            description:description,
            id:this.state.tasks.length
        }
        this.setState({
            tasks:[...this.state.tasks,newTask]
        })
    }

    deleteTask=(id)=>{
       const newTask = this.state.tasks.filter(task=>task.id!== id)
       this.setState({
           tasks:newTask
       })
       console.log(newTask)
    }

    checkDone=(id)=>{
        const newTasks=this.state.tasks.map(task => {
            if (task.id === id){
                task.done=!task.done
            }
            return task
        })
        this.setState({task:newTasks})
    }

    //data=(e) => <p> {e.title} - {e.description} - {e.done}</p>
    render(){// cada vez que se usa la función map se debe agregar la propiedad key al elemento retornado para que no se genere el warning
        return(
            <div>
                <Router>
                    <Link to = "/"> Home</Link>
                    <br/>
                    <Link to = "/posts"> Posts</Link>
                    <Route exact path="/" render={() => {
                        return <div>
                            <TaskForm addTask={this.addTask}/>
                            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
                        </div>
                    }} >
                    </Route>
                    <Route path="/posts" component={Post}/>
                    
                </Router>
            
            </div>
        )
    }
}

export default App;