import React from "react"

function TextInput(props) {
    return (
      <div className="textInput">
        <label for={props.name}>{props.label}</label>
        <input id={props.name} type={props.type} />
      </div>
    )
}


export default TextInput;
