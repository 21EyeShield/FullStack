import React from 'react';

const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return(
      <p><b>total of {sum} exercises</b></p>
    ) 
  }

export default Total