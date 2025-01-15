import { FC } from "react";

import { IconProps } from "./types";

export const BurgerIcon: FC<IconProps> = ({ size = 20, fill = "currentColor", ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.5 3.33333H17.5V5H2.5V3.33333ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z"
        fill={fill}
      />
    </svg>
  );
};
