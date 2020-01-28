import React from 'react'

const CustomCheckBox = (props) => {

    return( <div>
    <label for={props.name} className="form-label">{props.label}</label>
    <div className="checkbox-group">
      {props.options.map(option => {
        return (
          <label key={option}> {option}
            <input
              className="form-checkbox"
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={ props.selectedOptions.indexOf(option) > -1 }
              type="checkbox" />
         </label>
        );
      })}
    </div>
  </div>
);

}

export default CustomCheckBox;