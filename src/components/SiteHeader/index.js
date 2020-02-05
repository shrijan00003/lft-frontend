import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { StaticQuery, graphql } from 'gatsby';

const { Header } = Layout;

const Index = () => (
  <StaticQuery
    query={pagesQuery}
    render={data => {
      const {
        wpgraphql: {
          pages: { edges },
        },
      } = data;
      return (
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[`2`]}
            style={{ lineHeight: `64px` }}
          >
            <Menu.Item key="1">{`Learn Tech Free Logo`}</Menu.Item>
            {edges.map((edge, index) => {
              const { node } = edge;
              return <Menu.Item key={index + 2}>{node.title}</Menu.Item>;
            })}
          </Menu>
        </Header>
      );
    }}
  />
);

Index.propTypes = {
  siteTitle: PropTypes.string,
};

Index.defaultProps = {
  siteTitle: ``,
};

const pagesQuery = graphql`
  query GET_PAGES {
    wpgraphql {
      pages {
        edges {
          node {
            id
            title
            date
          }
        }
      }
    }
  }
`;

export default Index;
