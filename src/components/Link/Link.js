import React from "react";

import styles from "./Link.scss";

const Link = (props) => {
  return (
    <a
      className={styles.Link}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.linkText}
    </a>
  );
};

export default Link;
