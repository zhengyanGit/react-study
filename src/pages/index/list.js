import React, { Component } from "react"
import { List, Avatar } from "antd";
import data from "./data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class IndexList extends Component {
  constructor(props) {
    super(props);
    let { tab } = props;
    this.state = {
      page: 1
    }
    this.getData();
  }
  getData () {
    this.props.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'LIST_UPDATA_SUCC',
          data: data.data
        })
      }, 3000)

      // axios.get(`https://cnodejs.org/api/vi/topics?tab=${this.props.tab}&page=${this.state.page}&limit=15`)
      //   .then((res) => {
      //     console.log('res', res)
      //   })
      //   .catch((error) => {
      //     console.log('error', error)
      //   })
    })
  }
  render () {
    let { loading, data } = this.props;
    return <List loading={loading}
      dataSource={data}
      renderItem={item => (<List.Item actions={["回复", "访问"]}>
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url} />}
          title={<Link to={"/details/" + item.id}>{item.title}</Link>}
          description={<p><Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link></p>}
        />
        发表于:{item.create_at}
      </List.Item>)}
    >
    </List>
  }
}

export default connect(state => state.list)(IndexList)