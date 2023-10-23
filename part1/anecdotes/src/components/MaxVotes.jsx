const MaxVotes = ({ points, anecdotes }) => {
  const maxVote = Math.max(...points);
  const maxVoteIndex = points.indexOf(maxVote);
  return (
    <>
      <h2>Anecdotes with the most votes</h2>
      <div>{anecdotes[maxVoteIndex]}</div>
    </>
  );
};

export default MaxVotes;
