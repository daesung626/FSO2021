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

const App = (props) => {
  /*
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
  */

  /*
  const name = "Daesung";
  const age = 23;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Ann" age={15 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
  */

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  const Display = ({ counter }) => <div>{counter}</div>;

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  /*
  setTimeout(() => setCounter(counter + 1), 1000);
  console.log("rendering...", counter);
  return <div>{counter}</div>;
  */

  const handleClick = () => {
    console.log("clicked");
  };

  /*
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={setToZero} text="reset" />
    </div>
  );
  */
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
