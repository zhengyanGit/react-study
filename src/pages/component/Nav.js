import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default class Nav extends Component {
  render () {
    let { mode, className } = this.props || {};
    return (
      <Menu mode={mode} className={className} theme="dark">
        <Menu.Item icon={<MailOutlined />}>
          <Link to="/index">首页</Link>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />}>
          <Link to="/book">视频</Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
