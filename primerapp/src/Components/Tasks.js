import React,{Component} from "react";
import Tasks_Ind from "./Tasks_Ind"

class Tasks extends Component {
    render(){
        return (
            this.props.tasks.map((e) => <Tasks_Ind e={e} key={e.id}/>)
        )
    }
}

export default Tasks;