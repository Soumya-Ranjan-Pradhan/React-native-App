import * as React from "react";
import Svg, { Path } from "react-native-svg";

const groupSvg3 = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="22"
      viewBox="0 0 5 22"
      fill="none"
      {...props}
    >
      <ellipse
        cx="2.38095"
        cy="19.3929"
        rx="2.5177"
        ry="2.38095"
        transform="rotate(-90 2.38095 19.3929)"
        fill="#999999"
      />
      <ellipse
        cx="2.38095"
        cy="11.3363"
        rx="2.5177"
        ry="2.38095"
        transform="rotate(-90 2.38095 11.3363)"
        fill="#999999"
      />
      <ellipse
        cx="2.38095"
        cy="3.27967"
        rx="2.5177"
        ry="2.38095"
        transform="rotate(-90 2.38095 3.27967)"
        fill="#999999"
      />
    </Svg>
  );
};

export default groupSvg3;
