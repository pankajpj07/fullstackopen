import { useState } from "react";
import Button from "./components/Button";
import Stats from "./components/Stats";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <br />
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
