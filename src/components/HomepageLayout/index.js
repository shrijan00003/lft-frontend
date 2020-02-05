import React from 'react';

import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

import Sidebar from '../layout/sidebar';
import SEO from '../Seo';
import SiteHeader from '../../components/SiteHeader';

const HomepageLayout = ({ location, children }) => (
  <Layout>
    <SEO />
    <SiteHeader location={location} />
    <Layout>
      <Sidebar />
      <Layout style={{ padding: `0 24px 24px` }}>
        <Breadcrumb style={{ margin: `16px 0` }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: `#fff`,
            padding: 24,
            margin: 0,
            minHeight: `80vh`,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default HomepageLayout;
