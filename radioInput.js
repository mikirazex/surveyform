import React from "react";

const Radio = ({label, name, value, checked, handleChange, required, handleClick}) => {
  const radio = value.map((val, i) => (
    <li key={i}>
      <input
        type="radio"
        id={name+i}
        name={name}
        value={val}
        checked={checked[i]}
        onChange={handleChange}
        onClick={required ? () => setTimeout(() => handleClick(), 0)  : null}
        />
      <label htmlFor={name+i} >{label[i]}</label>
    </li>
  ))
  
  return (
    <React.Fragment>
      {radio}
    </React.Fragment>
  )
}

export default Radio;
