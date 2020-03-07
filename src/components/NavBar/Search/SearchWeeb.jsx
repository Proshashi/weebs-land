import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchWeeb = () => {
  return (
    <div className="__otaku_nav-search">
      <Input
        type="text"
        prefix={<SearchOutlined className="__otaku_nav-search--input__icon" />}
        className="__otaku_nav-search--input"
        placeholder="Search Weeb"
      />
    </div>
  );
};

export default SearchWeeb;
