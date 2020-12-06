import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Input, Row, Col } from "antd"
import { newEventAction } from "../../redux/event/eventActions"
import socketIO from "../../services/socketIO";
import DataTable from "./DataTable";

const { Search } = Input;

function Home({ events, eventAction }) {
  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [searchedValue, setSearchedValue] = useState("")
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Received At",
      dataIndex: "receivedAt",
      key: "receivedAt",
    },
  ];
  useEffect(() => {
    if (isActive) {
      socketIO.on("event", (message) => {
        eventAction(message);
      });
    } else {
      socketIO.removeListener("event")
    }
  }, [isActive]);

  useEffect(() => {
    const rawData = searchedValue ?
      events.filter(e => e.type?.includes(searchedValue) ||
        e.traits?.name?.includes(searchedValue) ||
        e.properties?.path?.includes(searchedValue)) :
      events;

    setData(rawData.map((d, id) => {
      return {
        key: id,
        type: d.type,
        path: d.properties?.path,
        userId: d.userId,
        userName: d.traits?.name,
        receivedAt: d.receivedAt
      }
    }))
  }, [events, searchedValue])

  const onSearch = (value) => {
    setSearchedValue(value)
  }

  return (
    <div className={"home-page__content"}>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 4, offset: 4 }}
        >
          <Button
            type={isActive ? "danger" : "primary" }
            onClick={() => setIsActive(!isActive)}
          >
            { isActive ? "Stop" : "Resume" }
          </Button>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 14, offset: 4 }}
        >
          <DataTable data={data} columns={columns} />
        </Col>
      </Row>
    </div>
  )
}

Home.propTypes = {
  events: PropTypes.array,
  eventAction: PropTypes.func
};

export default connect(
  state => ({ events: state.event.events }),
  { eventAction: newEventAction }
)(Home);