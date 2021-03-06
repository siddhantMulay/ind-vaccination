import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Link from "@src/components/Link";
import Button from "@src/components/Button";
import Dropdown from "@src/components/Dropdown";
import Drawer from "@src/components/Drawer";

// Containers
import LandingDrawer from "@src/containers/LandingDrawer";

// API
import API from "@src/api";

// Actions
import {
  setStates,
  selectState,
  setDistricts,
  selectDistrict,
  toggleLandingDrawer,
} from "@src/store/actions";

// Assets
import CloseIcon from "@src/assets/icons/Close.svg";

// Constants
import { STATES } from "@src/constants";

import styles from "./Landing.scss";

const Landing = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { states, stateSelected, districtSelected, districts, isDrawerOpen } =
    store;

  const [statesDisabled, setStatesDisabled] = useState(true);
  const [districtsDisabled, setDistrictsDisabled] = useState(true);
  const [districtsLoading, setDistrictsLoading] = useState(false);

  useEffect(() => {
    API.getStateList()
      .then(({ success, response }) => {
        if (success) {
          const statesDataList = response.states.map((item) => ({
            id: item.state_id,
            name: item.state_name,
          }));
          dispatch(setStates(statesDataList));
          setStatesDisabled(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Change State (Geographical :P)
  const stateChange = (value, record) => {
    setDistrictsLoading(true);
    setDistrictsDisabled(true);
    setDistricts([]);

    API.stateChange(value)
      .then(({ success, response }) => {
        if (success) {
          const districtsDataList = response.districts.map((item) => ({
            id: item.district_id,
            name: item.district_name,
          }));
          dispatch(setDistricts(districtsDataList));
          dispatch(selectState({ id: value, name: record.children }));
          dispatch(
            selectDistrict({
              id: undefined,
            })
          );
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

  // Change District
  const districtChange = (value, record) => {
    dispatch(selectDistrict({ id: value, name: record.children }));
  };

  // Toggle Landing Drawer
  const toggleDrawer = (toggle) => {
    onSearch();
    dispatch(toggleLandingDrawer(toggle));
  };

  // On Search Click
  const onSearch = () => {
    API.appointments(districtSelected.id)
      .then(({ success, response }) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
          options={states}
          listHeight={150}
          onChange={(data, record) => stateChange(data, record)}
          disabled={statesDisabled}
        />

        <Dropdown
          placeholder="Select District"
          options={districts}
          listHeight={150}
          disabled={districtsDisabled}
          loading={districtsLoading}
          onChange={(data, record) => districtChange(data, record)}
          value={districtSelected.id}
        />
      </div>

      <Button
        disabled={districtSelected.id ? false : true}
        type="large"
        onClick={() => toggleDrawer(true)}
      >
        Search
      </Button>

      <Drawer
        title={`${stateSelected.name}, ${districtSelected.name}`}
        placement="bottom"
        onClose={() => toggleDrawer(false)}
        visible={isDrawerOpen}
        closeIcon={<CloseIcon />}
      >
        <div className={styles.LandingDrawer}>
          <LandingDrawer.LHS isDrawerOpen={isDrawerOpen} />
          <LandingDrawer.RHS />
        </div>
      </Drawer>
    </div>
  );
};

export default Landing;
