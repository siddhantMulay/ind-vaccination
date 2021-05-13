import React from "react";

// Internal Components
import Header from "@src/components/Header";
import Landing from "@src/containers/Landing";

import styles from "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.HomeContent}>
        <Landing />
      </div>
    </>
  );
};

export default Home;
