import { Component } from "react";

class FormInput extends Component {
    render() {
        const {name} = this.props

        return (
            <input type="text" name={name}></input>
        );            
    }
}

export default FormInput;
