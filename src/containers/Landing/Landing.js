import React, { useState } from "react";

import Link from "@src/components/Link";
import Button from "@src/components/Button";
import Dropdown from "@src/components/Dropdown";

// API
import API from "@src/api";

// Constants
import { STATES } from "@src/constants";

import styles from "./Landing.scss";

const Landing = (props) => {
  const [districtsDisabled, setDistrictsDisabled] = useState(true);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [districts, setDistricts] = useState([]);

  const stateChange = (value) => {
    setDistrictsLoading(true);
    setDistrictsDisabled(true);
    setDistricts([]);

    API.stateChange(value)
      .then(({ success, response }) => {
        if (success) {
          const districtsData = JSON.parse(response.body).districts;
          const districtsDataList = districtsData.map((item) => ({
            id: item.district_id,
            name: item.district_name,
          }));

          setDistricts(districtsDataList);
        }
        setDistrictsLoading(false);
        setDistrictsDisabled(false);
      })
      .catch((error) => {
        console.log(error);
        setDistrictsLoading(false);
        setDistrictsDisabled(false);
      });
  };

  return (
    <div className={styles.Landing}>
      <div className={styles.LandingTitle}>
        Find latest information about{" "}
        <span className={styles.LandingTitleHighlight}>vaccination</span>{" "}
        centers and slots near you.
      </div>

      <div className={styles.LandingSubTitle}>
        You can register for a slot on{" "}
        <Link linkText="cowin.gov.in" link="https://www.cowin.gov.in/" />
      </div>

      <div className={styles.LandingCard}>
        <Dropdown
          placeholder="Select State"
          options={STATES}
          listHeight={150}
          onChange={stateChange}
        />

        <Dropdown
          placeholder="Select District"
          options={districts}
          listHeight={150}
          disabled={districtsDisabled}
          loading={districtsLoading}
        />
      </div>

      <Button type="large">Search</Button>
    </div>
  );
};

export default Landing;
