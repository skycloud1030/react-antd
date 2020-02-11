import React from "react";
import { Layout, Menu } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";
import { BackTop } from "antd";
import GithubCard from "./components/github-card/index.js";
import repositories from "./data/repositories.js";
import styles from "./App.module.css";
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  onSelect = ({ key }) => {
    window.location.href = `#${key}`;
  };
  render() {
    return (
      <Layout className={styles.layout}>
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["projects"]}
            style={{ lineHeight: "64px" }}
            onSelect={this.onSelect}
          >
            <Menu.Item key="projects">Projects</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Row className={styles.row} gutter={16}>
            <Col xs={24}>
              <Card title="Projects">
                <ul>
                  {repositories.map(item => {
                    return (
                      <li key={item}>
                        <a href={`#${item}`}>{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </Col>
          </Row>
          <Row className={styles.row} gutter={16}>
            {repositories.map(item => {
              return (
                <Col xs={24} xxl={8} key={item}>
                  <Card title={item} id={item} className={styles.card}>
                    <GithubCard name={item}></GithubCard>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>CT Hung ©2020</Footer>
        <BackTop />
      </Layout>
    );
  }
}

export default App;
