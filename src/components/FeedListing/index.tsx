import * as React from "react";
import styled from "styled-components";

import { Types } from "gatsby-theme-advanced";

import ArticleCard from "../ArticleCard";
import { constants } from "../../theme";
import LayoutWidthContainer from "../shared/LayoutWidthContainer";

const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 120px;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;

  @media (max-width: ${constants.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 120px;
  }
`;

const WidthLimitedGrid = styled(LayoutWidthContainer)`
  display: grid;
  grid-template-columns: 100%;
  gap: 100px;
  align-content: space-between;
  justify-items: stretch;
  margin-top:50px;
`;

type PostListingProps = {
  listing: Types.FeedList;
  noHero?: boolean;
};

const FeedListing = ({ listing, noHero }: PostListingProps): JSX.Element => (
  <WidthLimitedGrid>
    <Wrapper>
      {listing.map((feedItem, idx) => {
        // Check if we're rendering a placeholder
        if ("isPlaceholder" in feedItem)
          return <ArticleCard key={feedItem.key} />;

        return idx === 0 && !noHero ? (
          <ArticleCard key={feedItem.slug} post={feedItem} hero />
        ) : (
          <ArticleCard key={feedItem.slug} post={feedItem} />
        );
      })}
    </Wrapper>
  </WidthLimitedGrid>
);

export default FeedListing;
