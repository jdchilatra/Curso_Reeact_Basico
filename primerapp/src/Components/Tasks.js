import React,{Component} from "react";
import TasksInd from "./TasksInd"



class Tasks extends Component {
    render(){
        return (
            this.props.tasks.map((e) => <TasksInd e={e} key={e.id}/>)
        )
    }
}

export default Tasks;