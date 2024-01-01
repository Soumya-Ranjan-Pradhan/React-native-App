import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckBox = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M1.0625 2.75391C1.0625 1.92548 1.73407 1.25391 2.5625 1.25391H17.5625C18.3909 1.25391 19.0625 1.92548 19.0625 2.75391V17.7539C19.0625 18.5823 18.3909 19.2539 17.5625 19.2539H2.5625C1.73407 19.2539 1.0625 18.5823 1.0625 17.7539V2.75391Z"
        stroke="#878787"
      />
    </Svg>
  );
};

export default CheckBox;
