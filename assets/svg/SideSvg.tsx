import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SideSvg = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.333px"
      height="18.539px"
      viewBox="0 0 11 20"
      fill="none"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.04536 18.5695C0.545867 17.9908 0.566113 17.0749 1.09058 16.5237L7.43732 9.85414L1.09058 3.18458C0.566113 2.63343 0.545867 1.71751 1.04536 1.1388C1.54486 0.560099 2.37494 0.53776 2.89941 1.08891L10.2433 8.8063C10.5032 9.07942 10.6503 9.45813 10.6503 9.85414C10.6503 10.2502 10.5032 10.6289 10.2433 10.902L2.89942 18.6194C2.37495 19.1705 1.54486 19.1482 1.04536 18.5695Z"
        fill="#0081FF"
      />
    </Svg>
  );
};

export default SideSvg;

