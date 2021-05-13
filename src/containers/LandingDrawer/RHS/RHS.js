import React, { useState, useCallback } from "react";
import { Table } from "antd";

// Components
import Button from "@src/components/Button";

import styles from "./RHS.scss";

const RHS = (props) => {

  const [rowHovered, setRowHovered] = useState();
  
  const columns = [
    {
      title: "Center Name",
      dataIndex: "centerName",
      key: "centerName",
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
      render: (text, record) => (
        <Button
          type="table"
          className={` ${styles.TableButton} ${
            rowHovered === record.key
              ? styles.TableButtonActive
              : ''
          }`}
        >
          Book a Slot
        </Button>
      ),
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

  const handleRowHover = useCallback((record) => {
    setRowHovered(record.key);
  }, []);

  const handleRowMouseLeave = useCallback(() => {
    setRowHovered(null);
  }, []);

  return (
    <div className={styles.RHS}>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      onRow={(record) => {
        return {
          onMouseEnter: () => {
            handleRowHover(record);
          },
          onMouseLeave: () => {
            handleRowMouseLeave();
          },
        };
      }}
    />
  </div>
  );
};

export default RHS;
