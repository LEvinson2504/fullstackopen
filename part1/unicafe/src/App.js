import React, {useState} from 'react';

const Button = ({title, handler}) => (
  <button onClick={handler}>{title}</button>
)

const Display = ({title, value}) => (
  <tr>
    <td> {title} </td>
    <td> {value} </td>
  </tr>
)

const Statistic = ({text, value}) => (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
)

const Statistics = ({data}) => {
  const {neutral, positive, negative} = data;
  const total = neutral + positive + negative;
  return (<div>
    {total > 0 ? <table>
      <tbody>
        <Statistic text="Total" value={total} />
        <Statistic text="Average" value={(positive - negative) / total || 0} />
        <Statistic text="Positive" value={positive && positive / total} />
      </tbody>
    </table > : <h2> No feedback given </h2>}
  </div>
  )
}

const App = () => {
  const [neutral, setNeutral] = useState(0);
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const data = {neutral, positive, negative};
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button title="positive" handler={() => setPositive(positive + 1)} />
      <Button title="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button title="negative" handler={() => setNegative(negative + 1)} />

      <h1>Statistics</h1>
      <table>
        <tbody>
          <Display title="Positive" value={positive} />
          <Display title="Neutral" value={neutral} />
          <Display title="Negative" value={negative} />
        </tbody>
      </table>
      <Statistics {...{data}} />
    </div>
  )
}

export default App;
