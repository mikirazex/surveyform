import React, { Component } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import './app.scss';

class App extends Component {
  state = {
    currentStep: 1,
    stepsCount: 3,
    name: '',
    email:  '',
    age: '',
    role: '',
    recommend: '',
    like: '',
    toImprove: [],
    comment: '',
    errName: '',
    errEmail: '',
    errAge: '',
    errRecommend: ''
  }


handleChange = e => {
  const {name, value} = e.target
  this.setState({[name]: value})    
}


handleCheckboxChange = e => {
  const {value} = e.target;
  const {toImprove} = this.state;
  let arr;
  if(toImprove.includes(value)) arr = toImprove.filter(x => x!==value)
  else arr = toImprove.concat(value)
  this.setState({toImprove: arr}) 
}

 
handleSubmit = e => {
  e.preventDefault()
  const { name, email, age, role, recommend, like, toImprove, comment} = this.state
  alert(`Your registration detail: 
         Name: ${name} 
         Email: ${email}
         Age: ${age} 
         Role: ${role} 
         Recommend: ${recommend} 
         Like: ${like} 
         To improve: ${toImprove}
         Comment: ${comment}`)
}


next = () => {
  let {currentStep, stepsCount} = this.state
  if(this.validate().includes(false)) return;
  currentStep = currentStep >= stepsCount ? stepsCount : currentStep + 1
  this.setState({currentStep})
}

  
prev = () => {
  let {currentStep} = this.state
  currentStep = currentStep <= 1 ? 1 : currentStep - 1
  this.setState({currentStep})
}


previousButton = () => {
  const {currentStep} = this.state;
  if(currentStep===1) return null;
  
  return (
    <button 
      className="btn btn-secondary" 
      type="button" onClick={this.prev}>
      Prev
    </button>
  )
}


nextButton = () => {
  const {currentStep, stepsCount} = this.state;
  if(currentStep === stepsCount) return null;
  
  return (
    <button 
      className="btn btn-primary" 
      type="button" onClick={this.next}>
      Next
    </button>        
  )
}


submitButton = () => {
  const {currentStep, stepsCount} = this.state;
  if(currentStep !== stepsCount) return null;
  
  return (
    <button 
      className="btn btn-primary" 
      type="button" onClick={this.handleSubmit}>
      Submit
    </button>        
  )
}


validate = () => {
  const {currentStep} = this.state;
  if(currentStep === 1) return this.isValidStep1()
  if(currentStep === 2) return this.isValidStep2()
}


isValidStep1 = () => {
  return [
    this.isValidName(),
    this.isValidEmail(),
    this.isValidAge()
  ]
}


isValidStep2 = () => {
  return [this.isValidRecommend()];
}


isValidName = () => {
  const {name} = this.state;
  const checkName = /^[a-zA-Z]{3,20}$/.test(name);
  checkName 
    ? this.setState({errName: false})
    : this.setState({errName: 'Name must be 3 chars min, 20 chars max, only letters.'})
  return checkName
}


isValidEmail = () => {
  const {email} = this.state;
  const checkEmail = /^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+\.[\w-]+$/.test(email)
  checkEmail 
    ? this.setState({errEmail: false})
    : this.setState({errEmail: 'Wrong email address.'})
  return checkEmail
}


isValidAge = () => {
  const {age} = this.state;
  const checkAge = age >= 10 && age <= 122
  checkAge 
    ? this.setState({errAge: false})
    : this.setState({errAge: 'Age must be between 10 & 122 max.'})
  return checkAge
}


isValidRecommend = () => {
  const {recommend} = this.state;
  const arr = ['definitely', 'maybe', 'notSure']
  const checkRecommend = arr.includes(recommend)
  checkRecommend 
    ? this.setState({errRecommend: false})
    : this.setState({errRecommend: true})
  return checkRecommend
}

getBgColor = step => {
  const {currentStep} = this.state;
  return currentStep < step 
            ? '#b7b7b7'
            : currentStep === step 
              ? '#48C7EF'
              : '#48EF80'
}


render() {
  const {currentStep, name, email, age, role, recommend, like, toImprove, errName, errEmail, errAge, errRecommend} = this.state
  
  return (
    <div className="form">
      <h1>Survey Form</h1>
      <p>Let us know how we can improve freeCodeCamp</p>

      <div className="steps">
        <span 
          className="step step1" 
          style={{background: currentStep === 1 
            ? '#48C7EF'
          : '#48EF80'}}></span>
        <span 
          className="line" 
          style={{background: this.getBgColor(2)}}></span>
        <span 
          className="step step2"
          style={{background: this.getBgColor(2)}}></span>
        <span 
          className="line"
          style={{background: this.getBgColor(3)}}></span>
        <span 
          className="step step3"
          style={{background: this.getBgColor(3)}}></span>
      </div>

      <form onSubmit={this.handleSubmit}>

        <div 
          className="form-fields" 
          style={{maxWidth: currentStep === 1 ? '550px' : '700px'}}>
          <div style={{opacity: currentStep === 1 ? 1 : 0}}>
            <Step1 
              currentStep={currentStep}
              name={name}
              email={email}
              age={age}
              errName={errName}
              errEmail={errEmail}
              errAge={errAge}
              handleChange={this.handleChange}
              isValidName={this.isValidName}
              isValidEmail={this.isValidEmail}
              isValidAge={this.isValidAge}
              />
          </div>

          <div style={{opacity: currentStep === 2 ? 1 : 0}}>
            <Step2 
              currentStep={currentStep}
              name={name}
              role={role}
              recommend={recommend}
              like={like}
              errRecommend={errRecommend}
              handleChange={this.handleChange}
              isValidRecommend={this.isValidRecommend}
              />
          </div>

          <div style={{opacity: currentStep === 3 ? 1 : 0}}>
            <Step3 
              currentStep={currentStep} 
              toImprove={toImprove}
              handleCheckboxChange={this.handleCheckboxChange}
              handleChange={this.handleChange}
              />
          </div>
        </div>

        {this.previousButton()}
        {this.nextButton()}
        {this.submitButton()}

      </form>
    </div>
  );
}
}


export default App;
