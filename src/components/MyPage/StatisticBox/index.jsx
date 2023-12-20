import { Style } from "./style";

const StatisticBox = ({ number, label }) => {
  return (
    <Style.Statistics>
      <Style.StatNumber>{number}</Style.StatNumber>
      <Style.StatLabel>{label}</Style.StatLabel>
    </Style.Statistics>
  );
};

export default StatisticBox;
