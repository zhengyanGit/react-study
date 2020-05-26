import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col, } from 'antd'
import IndexList from "./list"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true
    }
  }
  render () {
    console.log('index-zhu', this.props)
    let type = this.props.match.params.id;
    console.log('type', type)
    return (
      <div className="wrap">
        <Row>
          <Col md={6} xs={24}>
            <Menu>
              <Menu.Item>
                <Link to="/index/child1">二级1</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/child2">二级2</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/child3">二级3</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/child4">二级4</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/child5">二级5</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/child6">二级6</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col md={18} xs={24}>
            <IndexList type={type} />
          </Col>
        </Row>

      </div>
    )
  }
}
