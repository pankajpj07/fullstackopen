import StatsLine from "./StatsLine";

const Stats = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const avgFeedback = (good - bad) / totalFeedback;
  const positiveFeedback = (good / totalFeedback) * 100;
  return (
    <>
      {totalFeedback > 0 ? (
        <>
          <table border={1}>
            <thead>
              <tr>
                <th colSpan={3}>Name</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <StatsLine text={"Good"} value={good} />
              <StatsLine text={"Neutral"} value={neutral} />
              <StatsLine text={"Bad"} value={bad} />
              <StatsLine text={"All"} value={totalFeedback} />
              <StatsLine text={"Average"} value={avgFeedback} />
              <StatsLine text={"Positive"} value={`${positiveFeedback}%`} />
            </tbody>
          </table>
        </>
      ) : (
        <div>No Feedback Given</div>
      )}
    </>
  );
};

export default Stats;
