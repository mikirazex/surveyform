import React from "react";

const Step1 = ({currentStep, name, email, age, handleChange, errName, errEmail, errAge, isValidName, isValidEmail, isValidAge}) => {
  if (currentStep !== 1) return null;
  
  
  const getBorderColor = name => {
    return name 
      ? '1px solid rgb(255, 170, 170)' 
      : '1px solid rgb(170, 221, 255)';
  }


  return(
    <div className="form-group1">

      <div className="input-wrapper">
        <label htmlFor="username">Name</label>
        <input
          className="input-field"
          id="username"
          name="name"
          type="text"
          placeholder="Enter name"
          value={name}
          style={{border: getBorderColor(errName)}}
          onChange={handleChange}
          onBlur={isValidName}
          />
        {errName === false && <i className="fa fa-check input-icon" aria-hidden="true"></i>}
        {errName && (
          <React.Fragment>
            <p>{errName}</p><i className="fa fa-exclamation-triangle input-icon" aria-hidden="true"></i>
          </React.Fragment>
        )}
      </div>

      <div className="input-wrapper">
        <label htmlFor="useremail">Email</label>
        <input
          className="input-field"
          id="useremail"
          name="email"
          type="text"
          placeholder="Enter email"
          value={email}
          style={{border: getBorderColor(errEmail)}}
          onChange={handleChange}
          onBlur={isValidEmail}
          />
        {errEmail === false && <i className="fa fa-check input-icon" aria-hidden="true"></i>}
        {errEmail && (
          <React.Fragment>
            <p>{errEmail}</p><i className="fa fa-exclamation-triangle input-icon" aria-hidden="true"></i>
          </React.Fragment>
        )}
      </div>

      <div className="input-wrapper">
        <label htmlFor="userage">Age</label>
        <input
          className="input-field"
          id="userage"
          name="age"
          type="number"
          placeholder="Enter age"
          value={age}
          style={{border: getBorderColor(errAge)}}
          onChange={handleChange}
          onBlur={isValidAge}
          />
        {errAge === false && <i className="fa fa-check input-icon" aria-hidden="true"></i>}
        {errAge && (
          <React.Fragment>
            <p>{errAge}</p><i className="fa fa-exclamation-triangle input-icon" aria-hidden="true"></i>
          </React.Fragment>
        )}
      </div>

    </div>
  );
}

export default Step1;
