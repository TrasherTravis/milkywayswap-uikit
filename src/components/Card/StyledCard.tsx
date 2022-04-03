import styled, { DefaultTheme, keyframes } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme }) => theme.card.background};
  border-radius: 6px;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  position: relative;

  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  border-radius: 6px;
  ${space}

  &::before {
    content: "";
    width: 103%;
    height: 103%;
    border-radius: 8px;
    position: absolute;
    z-index: -1;
    top: -1.5%;
    left: -1.5%;
  }
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
