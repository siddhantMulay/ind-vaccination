import React, { useState } from "react";
import { Select } from "antd";

// Icons
import ArrowIcon from "@src/assets/icons/Arrow.svg";

import styles from "./Dropdown.scss";

const Dropdown = (props) => {
  const { Option } = Select;
  const {
    options,
    placeholder,
    listHeight,
    loading,
    disabled,
    onChange,
  } = props;

  const [isVisible, setIsVisble] = useState(false);

  const triggerDropdownVisibility = (isShown) => {
    setIsVisble(isShown);
  };

  return (
    <Select
      className={`${styles.Dropdown} customDropdown ${
        isVisible && "customDropdownActive"
      }`}
      showSearch
      autoComplete="dontshow"
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      listHeight={listHeight}
      loading={loading}
      disabled={disabled}
      onChange={onChange}
      suffixIcon={<ArrowIcon />}
      onDropdownVisibleChange={triggerDropdownVisibility}
    >
      {options.map((item) => (
        <Option key={item.id} id={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default Dropdown;
