import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  
  return (
    <div>
      <div>
      <h1>give feed back</h1>
      <Button handleClick ={handleGood} text ='good' />
      <Button handleClick ={handleNeutral} text ='neutral' />
      <Button handleClick ={handleBad} text ='bad' />
      </div>
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {(good-bad)/all}</div>
        <div>positive {(good*100)/all} %</div>
      </div>
    </div>
  )
}

export default App