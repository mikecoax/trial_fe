import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

function DataTable({ data, columns }) {
  return (
    <Table
      dataSource={data}
      columns = {columns}
      pagination={{ pageSize: 20 }}
    />
  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
};

export default DataTable;