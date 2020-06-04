import React from "react";

import { CustomButton } from "./button.styles.jsx";

const Button = ({ children, ...otherProps }) => (
  <CustomButton {...otherProps}>{children}</CustomButton>
);

export default Button;
