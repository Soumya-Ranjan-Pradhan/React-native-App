import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightSvg1 = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="#3B83F6"
      {...props}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </Svg>
  );
};

export default RightSvg1;
