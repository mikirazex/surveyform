import React from "react";
import Radio from "./radioInput";

const Step2 = ({currentStep, name, role, handleChange, recommend, like, errRecommend, isValidRecommend}) => {
  if (currentStep !== 2) return null;
  const radio1Vals = ['student', 'job', 'learner', 'preferNo', 'other'];
  const radio2Vals = ['definitely', 'maybe', 'notSure'];
  const radio3Vals = ['challenges', 'projects', 'community', 'Open Source'];
  
  return(
    <div className="form-group2">
       
      <label className="question" htmlFor="current-role">{name}, which option best describes your current role?</label>
      <ul id="current-role">
        <Radio
          name='role'
          value={radio1Vals}
          label={['Student', 'Full Time Job', 'Full Time Learner', 'Prefer not to say', 'Other']}
          checked={radio1Vals.map(val => val===role)}
          handleChange={handleChange}
          required={false}
          />
      </ul>
      
      
      <label className="question" htmlFor="recommend">* How likely is that you would recommend freeCodeCamp to a friend?</label>
      <ul id="recommend" style={{border: errRecommend === true ? '1px solid red' : '' }}>
        <Radio
          name='recommend'
          value={radio2Vals}
          label={['Definitely', 'Maybe', 'Not sure']}
          checked={radio2Vals.map(val => val===recommend)}
          handleChange={handleChange}
          handleClick={isValidRecommend}
          required={true}
          />
      </ul>
      
      <label className="question" htmlFor="like">What do you like most in FCC:</label>
      <ul id="like">
        <Radio
          name='like'
          value={radio3Vals}
          label={['Challenges', 'Projects', 'Community', 'Open Source']}
          checked={radio3Vals.map(val => val===like)}
          handleChange={handleChange}
          required={false}
          />
      </ul>
     
    </div>
  );
}

export default Step2;
