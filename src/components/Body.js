import React from 'react';
/** 
 * Functional Components
 * Props => passing the data to other components mainly parents to child
*/

export default props =>  (
    <div>
        <p className="App-intro">
            {props.text}
        </p>
        <p className="App-intro">
            {props.textSubject}
        </p>
    </div>
)
  