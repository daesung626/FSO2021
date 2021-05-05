import React, { useState } from "react";

const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Content = (props) => {
  // console.log(props.parts[0]);

  return (
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

// const Button = ({ handleClick, text }) => {
//   <button onClick={handleClick}>{text}</button>;
// };

// const Button = (props) => {
//   <button onClick={props.handleClick}>{props.text}</button>;
// };

// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

const Display = (props) => <div>{props.value}</div>;

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      good {props.good}
      <br />
      neutral {props.neutral}
      <br />
      bad {props.bad}
      <br />
      all {total}
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const [counter, setCounter] = useState(0);

  // const Button = ({ handleClick, text }) => (
  //   <button onClick={handleClick}>{text}</button>
  // );

  const handleClick = () => {
    console.log("clicked");
  };

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  // return (
  //   <div>
  //     <Display value={value} />
  //     <Button handleClick={() => setToValue(1000)} text="thousand" />
  //     <Button handleClick={() => setToValue(0)} text="reset" />
  //     <Button handleClick={() => setToValue(value + 1)} text="increment" />
  //   </div>
  // );

  /*
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
  */

  /******************* Exercise *****************/
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const goodClick = () => {
  //   setGood(good + 1);
  // };
  // const neutralClick = () => {
  //   setNeutral(neutral + 1);
  // };
  // const badClick = () => {
  //   setBad(bad + 1);
  // };

  // return (
  //   <div>
  //     <h1>give feedback</h1>
  //     <Button handleClick={goodClick} text="good" />
  //     <Button handleClick={neutralClick} text="neutral" />
  //     <Button handleClick={badClick} text="bad" />
  //     <h1>statistics</h1>

  //     <Statistics good={good} neutral={neutral} bad={bad} />
  //   </div>
  // );
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const points = Array.apply(null, new Array(6)).map(
    Number.prototype.valueOf,
    0
  );

  const nextClick = () => {
    setSelected(selected + 1);
  };

  const voteClick = () => {
    setVotes(votes + 1);
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes} votes
      <br />
      <Button handleClick={voteClick} text="vote" />
      <Button handleClick={nextClick} text="next annecdote" />
    </div>
  );
};

export default App;
