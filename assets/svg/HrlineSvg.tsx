import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HrlineSvg = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="635"
      height="2"
      viewBox="0 0 635 2"
      fill="none"
      {...props}
    >
      <Path d="M0.125 0.750488L634.484 0.750433" stroke="#C9C9C9" />
    </Svg>
  );
};

export default HrlineSvg;
