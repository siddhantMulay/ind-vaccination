import React from "react";
import { Button } from "antd";

import styles from "./Button.scss";

const CustomButton = (props) => {
  return (
    <Button
      {...props}
      className={`${props.type === "large" && styles.ButtonLarge} ${
        styles.Button
      } ${props.className}`}
    />
  );
};

export default CustomButton;
