import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Dropdown, Button } from 'antd';
import Nav from './Nav';
import { MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;


export default class Head extends Component {

  // constructor() {
  //   this.state = {
  //     visible: true
  //   }
  // }



  _handleVisibleChange = () => {

  }
  render () {
    return (
      <Header className="head">
        <Row className="wrap">
          <Col md={6} xs={24}><h1 className="log">头部</h1></Col>
          <Col md={18} xs={0}><Divider type="vertical" className="line" />
            <Nav mode="horizontal" classNameStr="nav" />
          </Col>
          <Col md={0} xs={24} className="xsNav">
            <Dropdown
              overlay={<Nav className="xsNav" />}
              trigger={["click", "touchend"]}
              placement="bottomRight"
            //onVisibleChange={this._handleVisibleChange}
            // visible={this.state.visible}
            >
              <Button><MenuOutlined /></Button>
            </Dropdown>
          </Col>
        </Row>

      </Header>
    )
  }
}
