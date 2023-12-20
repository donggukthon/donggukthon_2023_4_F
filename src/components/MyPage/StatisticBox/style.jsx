import styled from "styled-components";

const Statistics = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ddd; // Adjust color to match design
  border-bottom: 1px solid #ddd; // Adjust color to match design
  padding: 1rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  display: flex;
`;

const StatNumber = styled.div`
  font-size: 2rem; // Adjust size to match design
  font-weight: bold;
  color: #yourColor; // Replace with actual color
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666; // Adjust color to match design
`;

export const Style = {
  Statistics,
  StatItem,
  StatNumber,
  StatLabel,
};
