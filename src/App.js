import React from 'react';
import RouterIndex from "./router/index";
import './basic/css/index.css'
import Head from "./pages/component/head";
import Foot from "./pages/component/foot";
import { Layout } from "antd"

function App () {
  return (
    <div className="pageWrap">
      <Layout>
        <Head />
        <main className="main">
          <RouterIndex />
        </main>
        <Foot />
      </Layout>
    </div>
  )
}

export default App;
