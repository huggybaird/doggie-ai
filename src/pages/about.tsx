import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";
import LayoutWidthContainer from "../components/shared/LayoutWidthContainer";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

 
const WidthLimitedGrid = styled(LayoutWidthContainer)`
display: grid;
grid-template-columns: 100%;
gap: 80px;
align-content: space-between;
justify-items: stretch;
`;
  return (
    <Layout>
      <WidthLimitedGrid>
        <div className="about-container">
          <Helmet title={`About | ${config.website.title}`} />
        </div>
        <h1>Baird added an about.tsx in shadowed component. This is a long header to test how it displays</h1>


      </WidthLimitedGrid>
    </Layout>
  );
};

export default AboutPage;
