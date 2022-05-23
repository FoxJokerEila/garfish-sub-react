import { ConfigProvider, Layout, Menu, List } from "@arco-design/web-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import App from "./App";
import PageNotFound from "./PageNotFound";
import "./App.less";
import React from "react";
import "@arco-design/web-react/dist/css/arco.css";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

// export const prefixCls = "garfish-sub-react";
export const SubAppContext = createContext({});

const Index = <div style={{ marginBottom: "30px" }}>这里是主页。</div>;
const About = <div style={{ marginBottom: "30px" }}>欢迎来到关于页面。</div>;

const RootComponent = (props: { basename: any; store?: any }) => {
  const { basename, store } = props;

  const routes = (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={Index} />
        <Route path="/home" element={Index} />
        <Route path="/about" element={About} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
  return (
    <ConfigProvider>
      <SubAppContext.Provider value={{ basename, store }}>
        <BrowserRouter basename={basename}>
          <div className="layout-basic-demo">
            <Layout style={{ height: "400px" }}>
              <List
                style={{ width: 622 }}
                size="default"
                header="react 路由"
                dataSource={[
                  { to: "/home", text: "主页" },
                  { to: "/about", text: "关于" },
                ]}
                render={(item, index) => (
                  <List.Item key={index}>
                    {<Link to={item.to}>{item.text}</Link>}
                  </List.Item>
                )}
              />
              <Content>{routes}</Content>
            </Layout>
          </div>
        </BrowserRouter>
      </SubAppContext.Provider>
    </ConfigProvider>
  );
};

export default RootComponent;
