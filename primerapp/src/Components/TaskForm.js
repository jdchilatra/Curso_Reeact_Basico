import React,{ Component } from "react";

export default class TaskForm extends Component {
    state = {
        title:"",
        description:""
    }
    onSubmit=(e)=>{
        console.log("submitting")
        e.preventDefault();
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} 
                        type="text" 
                        placeholder="write a task" 
                        name="title"
                        value={this.state.title} >

                </input>
                <br/>
                <textarea onChange={this.onChange} 
                        placeholder="write a description" 
                        name="description"
                        value={this.state.description}>

                </textarea>
                <input type="submit"></input>
            </form>
        )
    }
}