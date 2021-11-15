import React from "react";
import Checkbox from "./checkboxInput";

const Step3 = ({currentStep, toImprove, handleChange, handleCheckboxChange}) => {
  if (currentStep !== 3) return null
  const checkboxVals = ['frontEndProjects', 'backEndProjects', 'dataVisualization',
                        'challenges', 'openSourceCommunity', 'gitterhelpRooms', 'videos', 'cityMeetups', 'wiki', 'forum'];
  const checkboxLabels = ['Front-end Projects', 'Back-end Projects', 'Data Visualization',
                        'Challenges', 'Open Source Community', 'Gitter help rooms', 'Videos', 'City Meetups', 'Wiki', 'Forum'];
  
  return(
    <div className="form-group3">
      <label className="question" htmlFor="preferences">Things that should be improved in the future<br/>(Check all that apply):</label>
      <ul id="preferences">
        <Checkbox
          name='toImprove'
          value={checkboxVals}
          label={checkboxLabels}
          checked={checkboxVals.map(val => toImprove.includes(val))}
          handleChange={handleCheckboxChange}/>
      </ul>

      <label className="question comments" htmlFor="comments">Any Comments or Suggestions?</label>
      <textarea 
        id="comments" 
        className="textarea-field" 
        name="comment" 
        placeholder="Enter your comment here..."
        onChange={handleChange}/>

    </div>
  );
}

export default Step3;
