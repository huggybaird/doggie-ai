import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";
import LayoutWidthContainer from "../components/shared/LayoutWidthContainer";



const WidthLimitedGrid = styled(LayoutWidthContainer)`
display: grid;
grid-template-columns: 100%;
gap: 0px;
align-content: space-between;
justify-items: stretch;
`;

const IndexPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <WidthLimitedGrid>
        <div className="about-container">
          <Helmet title={`${config.website.title}`} />
        </div> 
        <div>
          
        </div>
        <p>Robotics & Technology</p> 
        <img src="/images/zobo-robot-mobile.svg" />
      </WidthLimitedGrid>
    </Layout>
  );
};

export default IndexPage; 