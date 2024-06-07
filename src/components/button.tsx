import styled from "styled-components";
import color from "../config/color";
const Medium_Button = styled.button`
  height: 56px;
  background-color: ${color.Black};
  color: ${color.White};
  border-radius: 4px;
  border: none;
  font-weight: 600px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${color.Neutral};
  }
  &:active {
    background-color: ${color.White};
    color: ${color.Black};
    border: 1px solid ${color.Black};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Medium_Button;
