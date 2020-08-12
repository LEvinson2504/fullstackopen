import React, {useState} from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [top, setTop] = useState(0)

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
    console.log(selected);
  }

  const upvote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    if (++points[selected] > points[top]) {
      setTop(selected);
    }
  }

  return (
    <div>
      <h1> Anecdote of the day! </h1>
      <h3>{anecdotes[selected]}</h3>
      <p>has {points[selected]} </p>
      <button onClick={newAnecdote}>New Anecdote!</button>
      <button onClick={upvote}>upvote</button>

      {top !== selected && <>
        <h1> Top anecdote </h1>
        <h3>{anecdotes[top]}</h3>
        <p>has {points[top]} </p>
      </>
      }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;
