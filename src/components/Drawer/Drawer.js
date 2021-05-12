import React, { useEffect, useState } from "react";
import { Drawer } from "antd";

import styles from "./Drawer.scss";

const CustomDrawer = (props) => {
  const { children, visible } = props;
  const [zIndex, setZIndex] = useState(1000);

  useEffect(() => {
    if (!visible) {
      return setTimeout(() => {
        setZIndex(-1);
      }, 150);
    }

    return setZIndex(1000);
  }, [visible]);

  return (
    <Drawer
      {...props}
      className={styles.Drawer}
      mask={false}
      destroyOnClose
      zIndex={zIndex}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
