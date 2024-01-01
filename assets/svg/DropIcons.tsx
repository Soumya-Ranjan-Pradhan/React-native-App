import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DropIcons = (props: any) => {
  const { color } = props;
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.424685 1.17014C0.971958 0.641961 1.83814 0.66337 2.35935 1.21796L8.66667 7.92921L14.974 1.21796C15.4952 0.66337 16.3614 0.641961 16.9086 1.17014C17.4559 1.69833 17.477 2.57609 16.9558 3.13068L9.65759 10.8963C9.39931 11.1711 9.04117 11.3267 8.66667 11.3267C8.29216 11.3267 7.93402 11.1711 7.67574 10.8963L0.377498 3.13068C-0.143714 2.57609 -0.122588 1.69833 0.424685 1.17014Z"
      fill="#0081FF"
    />
  </Svg>
  );
};

export default DropIcons;
