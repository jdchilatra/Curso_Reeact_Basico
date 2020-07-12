import React,{Component} from "react"


class Tasks_Ind extends Component {
    render(){ //Task_Ind se convierte en una etiqueta de jsx "Componente" a la cual se le ponen propiedades, el componente también tiene su estado
        const {e} =this.props;
        return(
            <div >
                <p > 
                    {e.title} - 
                    {e.description} - 
                    {e.done} - 
                    {e.id} 
                <input type="checkbox"></input>
                <button>X</button>
                </p>
            </div>
        )
    }
}

export default Tasks_Ind;