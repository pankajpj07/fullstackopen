const StatsLine = ({ text, value }) => {
  return (
    <tr>
      <td colSpan={3}>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatsLine;
