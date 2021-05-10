import React from "react";

import Link from "@src/components/Link";

import styles from "./Header.scss";

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>
        <div className={styles.HeaderContentMainTitle}>Vaccinate India</div>
        <div className={styles.HeaderContentTitle}>
          We get our data from <Link linkText="Setu API" link="https://apisetu.gov.in/" />
        </div>
      </div>
    </div>
  );
};

export default Header;
