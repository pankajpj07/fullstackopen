import { useState } from "react";
import Button from "./components/Button";
import MaxVotes from "./components/MaxVotes";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const anecdotesLength = anecdotes.length;
  const [selected, setSelected] = useState(0);
  // const [points, setPoints] = useState({}); if using object
  const [points, setPoints] = useState(Array(anecdotesLength).fill(0));
  console.log;
  const handleNext = () => {
    let random;
    do {
      random = Math.floor(Math.random() * anecdotesLength);
    } while (random === selected);
    setSelected(random);
  };
  const handleVote = () => {
    // If using object
    // const copy = { ...points };
    // copy[selected] = copy[selected] ? copy[selected] + 1 : 1;
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  console.log("points", points);
  return (
    <>
      <div>{anecdotes[selected]}</div>
      <Button handleClick={handleVote} text={"Vote"} />
      <Button handleClick={handleNext} text={"Next anecdote"} />
      <MaxVotes points={points} anecdotes={anecdotes} />
    </>
  );
};

export default App;
