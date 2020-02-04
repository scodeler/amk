import React from "react"

function Checkbox(props) {
    return (
        <div className="checkBox">
          <label for={props.name}>
            <input id={props.name} type="checkbox" />
            {props.label}
          </label>
        </div>
    )
}


export default Checkbox;
