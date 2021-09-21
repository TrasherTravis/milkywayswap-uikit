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
        width="100%"
        height="100%"
        href={isDark ? "/images/viva/LogoTextNewDark.png" : "/images/viva/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
