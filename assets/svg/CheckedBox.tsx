import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckedBox = (props: any) => {
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
        d="M1.20312 2.73535C1.20312 1.90692 1.8747 1.23535 2.70312 1.23535H17.7031C18.5316 1.23535 19.2031 1.90692 19.2031 2.73535V17.7354C19.2031 18.5638 18.5316 19.2354 17.7031 19.2354H2.70313C1.8747 19.2354 1.20312 18.5638 1.20312 17.7354V2.73535Z"
        fill="#0081FF"
        stroke="#0081FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.531 6.50091C15.8195 6.79769 15.8195 7.27888 15.531 7.57566L9.35492 13.9279C9.00866 14.284 8.44725 14.284 8.10098 13.9279L4.88048 10.6155C4.59192 10.3187 4.59192 9.83755 4.88048 9.54077C5.16903 9.24398 5.63687 9.24398 5.92542 9.54077L8.72795 12.4232L14.486 6.50091C14.7746 6.20412 15.2424 6.20412 15.531 6.50091Z"
        fill="white"
      />
    </Svg>
  );
};

export default CheckedBox;
