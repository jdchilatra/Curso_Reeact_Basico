import React,{Component} from "react"

import PropTypes from "prop-types"; //sirve para definir el tipo de prop que se va a recibir
//import "./Tasks.css" //se puede exportar un Archivo Css para estilizar los componentes

const BtnDelete={ //estilos en linea con un objeto JS
    backgroundColor:"green",
    fontSize:"18px",
    color:"#fff",
    border:"none",
    padding: "10px 15px",
    borderRadius:"50%",
    cursor:"pointer"
}



class TasksInd extends Component {
    StyleCompleted(){
        return {
            fontSize:"20px",
            color:this.props.e.done ? "grey": "black",
            TextDecoration:"none"
        }

        
    }
    render(){ //Task_Ind se convierte en una etiqueta de jsx "Componente" a la cual se le ponen propiedades, el componente también tiene su estado
        const {e} =this.props;
        return(
            
                <p style={this.StyleCompleted()}> 
                    {e.title} - 
                    {e.description} - 
                    {e.done} - 
                    {e.id} 
                <input   type="checkbox"></input>
                <button style={BtnDelete}>X</button>
                </p>
            
        )
    }
}

TasksInd.propTypes={ // componente.propTypes  prop:el tipo de dato que se va a recibir
    e:PropTypes.object.isRequired
}


export default TasksInd;