import {Component} from "react";

class Class extends Component {
    render(){
        return  (
            <div>
                <h2>Hola, soy un componente de: {this.props.nombre}</h2>
            </div>
        )
    }
}

export default Class;