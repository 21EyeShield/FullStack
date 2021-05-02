import React, { useState } from 'react'

const Statistic = (props) => (
  <div>{props.text} {props.value}</div>
)


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, all}) => {

  if(all ===0){
    return(
      <div>
        no feedback given
      </div>
    )
  }
  return( 
    <div>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={all}/>
      <Statistic text="average" value={(good-bad)/all}/>
      <Statistic text="positive" value={(good * 100)/all} /> 
    </div>
)
}



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
        <Statistics good ={good} neutral={neutral} bad={bad} all={all} />
      </div>
    </div>
  )
}

export default App