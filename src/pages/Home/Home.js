import React from "react";
import { useSelector, useDispatch } from "react-redux";

// External Components
import { Typography } from "antd";

// Internal Components
import Header from "@src/components/Header";
import Landing from "@src/containers/Landing";

// APIs
import API from "@src/api";

// Actions
import allActions from "@src/store/actions";

import styles from "./Home.scss";

const Home = () => {
  const { Title } = Typography;
  const darkModeEnabled = useSelector((state) => state.globalStore.darkMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = (checked) => {
    dispatch(allActions.globalActions.toggleDarkMode(checked));
  };

  const handleTestAPICall = () => {
    API.getTodoList()
      .then(({ success, response }) => {
        console.log(success, response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
