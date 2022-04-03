import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg {...props}>
      <image
        height="60px"
        href={isDark ? "/images/milkyway/LogoTextNewDark.png" : "/images/milkyway/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
