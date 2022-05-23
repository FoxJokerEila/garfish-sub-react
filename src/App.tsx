import React, { createContext } from "react";
import "./App.less";
import { Outlet } from "react-router-dom";
import { Layout, Card } from "@arco-design/web-react";
const Content = Layout.Content;
export const prefixCls = "garfish-sub-react";
export const SubAppContext = createContext({});

function App() {
  return (
    <SubAppContext.Consumer>
      {() => {
        return (
          <Content>
            <div>
              <Card style={{ width: 360 }} title="react 子应用" hoverable>
                这里是，react 子应用。
                <br />
                <br />
                <Card
                  style={{ width: 300 }}
                  title="react 子应用的子界面"
                  hoverable
                >
                  <Outlet></Outlet>
                </Card>
              </Card>
            </div>
          </Content>
        );
      }}
    </SubAppContext.Consumer>
  );
}

export default App;
