import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrowSvg = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0826 1.19315C11.6589 1.82461 11.6356 2.82405 11.0304 3.42545L3.70724 10.7031L11.0304 17.9808C11.6356 18.5822 11.6589 19.5816 11.0826 20.2131C10.5062 20.8446 9.54844 20.8689 8.94328 20.2675L0.469601 11.8465C0.169724 11.5485 1.07808e-06 11.1352 1.07292e-06 10.7031C1.06777e-06 10.271 0.169724 9.85776 0.469601 9.55975L8.94328 1.1387C9.54844 0.537301 10.5062 0.561677 11.0826 1.19315Z"
        fill="#0081FF"
      />
    </Svg>
  );
};

export default LeftArrowSvg;
