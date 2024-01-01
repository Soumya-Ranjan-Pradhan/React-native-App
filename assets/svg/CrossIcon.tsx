import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CrossIcon = (props: any) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.739287 12.3139C0.538097 12.1228 0.530683 11.8054 0.722728 11.6051L11.2985 0.575982C11.4905 0.375703 11.8093 0.368324 12.0105 0.559499C12.2117 0.750674 12.2191 1.06801 12.027 1.26829L1.4513 12.2974C1.25926 12.4977 0.940477 12.5051 0.739287 12.3139Z"
        fill="#383A42"
        stroke="#383A42"
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0107 12.3139C12.2119 12.1228 12.2193 11.8054 12.0273 11.6051L1.45153 0.575982C1.25949 0.375703 0.940709 0.368324 0.739519 0.559499C0.538329 0.750674 0.530915 1.06801 0.72296 1.26829L11.2987 12.2974C11.4907 12.4977 11.8095 12.5051 12.0107 12.3139Z"
        fill="#383A42"
        stroke="#383A42"
        stroke-width="0.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default CrossIcon;
