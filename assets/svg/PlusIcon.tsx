import * as React from "react";
import Svg, { Line, Path } from "react-native-svg";

const PlusIcon = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="black"
      stroke-width="2"
      {...props}
    >
      <Line x1="12" y1="5" x2="12" y2="19" />
      <Line x1="5" y1="12" x2="19" y2="12" />
    </Svg>
  );
};

export default PlusIcon;
