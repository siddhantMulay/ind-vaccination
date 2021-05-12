import moment from "moment";
import React, { useState } from "react";
import { DatePicker, Table } from "antd";

// Components
import Link from "@src/components/Link";
import Button from "@src/components/Button";
import Dropdown from "@src/components/Dropdown";
import Drawer from "@src/components/Drawer";

// API
import API from "@src/api";

// Assets
import CloseIcon from "@src/assets/icons/Close.svg";

// Constants
import { STATES } from "@src/constants";

import styles from "./Landing.scss";

const Landing = (props) => {
  const [districtsDisabled, setDistrictsDisabled] = useState(true);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Change State (Geographical :P)
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

  const toggleDrawer = (toggle) => {
    setIsDrawerOpen(toggle);
  };

  const openDatePicker = () => {
    setTimeout(() => {
      return isDrawerOpen;
    }, 150);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current < moment().endOf("day");
  };

  const columns = [
    {
      title: "Center Name",
      dataIndex: "centerName",
      key: "centerName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "No. of slots",
      dataIndex: "slots",
      key: "slots",
    },
    {
      title: "Vaccine Available",
      dataIndex: "vaccine",
      key: "vaccine",
    },
    {
      title: "",
      key: "action",
      // render: (text, record) => <Button>Book a Slot</Button>,
    },
  ];

  const data = [
    {
      key: "1",
      centerName: "ILBS Session Site 3",
      slots: 32,
      vaccine: "COVISHIELD",
    },
    {
      key: "2",
      centerName: "ILBS Session Site 3",
      slots: 32,
      vaccine: "COVISHIELD",
    },
  ];

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

      <Button type="large" onClick={() => toggleDrawer(true)}>
        Search
      </Button>

      <Drawer
        title="Create a new account"
        placement="bottom"
        onClose={() => toggleDrawer(false)}
        visible={isDrawerOpen}
        closeIcon={<CloseIcon />}
      >
        <div className={styles.LandingDrawer}>
          <div className={styles.LandingDrawerLHS}>
            {isDrawerOpen && <DatePicker open disabledDate={disabledDate} showToday={false} /> }
            <div className={styles.LandingDrawerLHSFilters}>
              <div className={styles.LandingDrawerLHSFiltersTitle}>Filters</div>
              <div className={styles.LandingDrawerLHSFilterContainer}>
                <div className={styles.LandingDrawerLHSFilterItem}>
                  18+ years
                </div>
                <div className={styles.LandingDrawerLHSFilterItem}>
                  45+ years
                </div>
                <div className={styles.LandingDrawerLHSFilterItem}>
                  Covishield
                </div>
                <div className={styles.LandingDrawerLHSFilterItem}>Covaxin</div>
                <div className={styles.LandingDrawerLHSFilterItem}>Free</div>
                <div className={styles.LandingDrawerLHSFilterItem}>Paid</div>
              </div>
            </div>
          </div>

          <div className={styles.LandingDrawerRHS}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Landing;
