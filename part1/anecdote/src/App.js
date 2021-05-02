import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6+1).join('0').split('').map(parseFloat))
  const [mVote, setMVote] = useState(0)
  const randomSelect = () =>  setSelected(Math.floor(Math.random() * anecdotes.length)) 
 
  const addVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    MostVote([...copy]) //calculating the anecdote with the most votes
    setVote([...copy])  
  }
 
  const MostVote = (copy) => {
    let i
    let max = copy[0]
    let index = 0
    for (i=1; i < copy.length; i++){
      if(copy[i] > max) {
        max = copy[i]
        index = i
      }
    }
    setMVote(index)
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      <div>{anecdotes[selected]}</div> <div>has {vote[selected]} votes</div> 
      <div><Button handleClick={randomSelect} text="next anectode"/>  
           <Button handleClick={addVote} text="vote"/></div>
      <h1>anecdote with most votes</h1>
      <div>{anecdotes[mVote]}</div>
    </div>
  )
}

export default App