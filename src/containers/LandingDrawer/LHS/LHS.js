import React from "react";
import moment from "moment";
import { DatePicker } from "antd";

import styles from "./LHS.scss";

const LHS = (props) => {
  const { isDrawerOpen } = props;

  const disabledDate = (current) => {
    return current < moment().endOf("day");
  };

  return (
    <div className={styles.LHS}>
      {isDrawerOpen && (
        <DatePicker open disabledDate={disabledDate} showToday={false} />
      )}
      <div className={styles.LHSFilters}>
        <div className={styles.LHSFiltersTitle}>Filters</div>
        <div className={styles.LHSFilterContainer}>
          <div className={styles.LHSFilterItem}>18+ years</div>
          <div className={styles.LHSFilterItem}>45+ years</div>
          <div className={styles.LHSFilterItem}>Covishield</div>
          <div className={styles.LHSFilterItem}>Covaxin</div>
          <div className={styles.LHSFilterItem}>Free</div>
          <div className={styles.LHSFilterItem}>Paid</div>
        </div>
      </div>
    </div>
  );
};

export default LHS;
