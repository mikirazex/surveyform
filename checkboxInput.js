import React from "react";

const Checkbox = props => {
  const {label, name, value, checked, handleChange} = props;
  const checkbox = value.map((val, i) => (
    <li key={i}>
      <input
        type="checkbox"
        id={name+i}
        name={name}
        value={val}
        checked={checked[i]}
        onChange={handleChange}/>
      <label htmlFor={name+i} >{label[i]}</label>
    </li>
  ))
  
  return (
    <React.Fragment>
      {checkbox}
    </React.Fragment>
  )
}

export default Checkbox;
