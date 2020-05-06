import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// // const Hello = ({name, age}) => {
// //     const bornYear = () => new Date().getFullYear() - age;
// //     return (
// //       <div>
// //         <p>
// //           Hello {name}, you are {age} years old
// //           and born probably on {bornYear()}
// //         </p>
// //       </div>
// //     )
// //   }
  
// //   const App = () => {
// //     const name = 'Peter'
// //     const age = 10
  
// //     return (
// //       <div>
// //         <h1>Greetings</h1>
// //         <Hello name="Maya" age={26 + 10} />
// //         <Hello name={name} age={age} />
// //       </div>
// //     )
// //   }

// // ReactDOM.render(<App />, document.getElementById('root'));
// //---------------------------------------------------------
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({text, handleClick}) => <button onClick={handleClick}> {text} </button>
// const App = (props) => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>      
//       <Button handleClick={increaseByOne} text="Increment" /> 
//       <Button handleClick={decreaseByOne} text="Decrement" /> 
//       <Button handleClick={setToZero} text="Reset" /> 
//     </div>
//   )
// }

// let counter = 1

// ReactDOM.render(
//   <App counter={counter} />, 
//   document.getElementById('root')
// )
//----------------------------------------------------------------
const History = (props) => {
  if(props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  )
}

const App = (props) => {
  const [allClicks, setAll] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0,
  // });
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }
  //   setClicks({...clicks, left: clicks.left + 1})
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //   }
  //   setClicks(newClicks);
  // }
  // const handleRightClick = () => 
  //   setClicks({...clicks, right: clicks.right + 1})
  return(
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>
          Left
        </button>
        {right}
        <button onClick={handleRightClick}>
          Right
        </button>
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)