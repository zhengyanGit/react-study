import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

class Nav extends Component {
  constructor(arg) {
    super(arg);
    let now = this.getKey(this.props.location);
    this.state = {
      now
    }
  }
  getKey = (location) => {
    return location.pathname.split("/")[1];
  }
  shouldComponentUpdate (nextProps) {
    let now = this.getKey(nextProps.location);
    if (now !== this.state.now) {
      this.setState({
        now
      })
      return false
    }
    return true;
  }
  render () {
    let { mode, className } = this.props || {};
    console.log('his.state.now', this.state.now)
    return (
      <Menu mode={mode} className={className} theme="dark"
        selectedKeys={[this.state.now]}>
        <Menu.Item icon={<MailOutlined />} key="index">
          <Link to="/index">首页</Link>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />} key="book">
          <Link to="/book">视频</Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />} key="about">
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter((props) => {
  let { mode, classNameStr, location } = props;
  return <Nav
    mode={mode}
    classNameStr={classNameStr}
    location={location}
  />
})
