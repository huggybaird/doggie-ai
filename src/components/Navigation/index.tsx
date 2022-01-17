import React from "react";

import { useConfig } from "gatsby-theme-advanced";

// import { AdvancedLogo } from "../../images/logo/zobo-logo250x39.jpg";

import * as S from "./style";

const Navigation = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.HomeButton to="../">
        <img src="../../images/logo/zobo-logo250x39.jpg" />
        {/* <AdvancedLogo width={250} height={39} /> */}
        {/* <S.SiteTitle>{config.website.titleShort}</S.SiteTitle> */}
      </S.HomeButton>
      <S.NavGrid>
        <S.NavButton to="/">Posts</S.NavButton>
        <S.NavButton noBasePath to="/about">
          About
        </S.NavButton>
        {/* <S.NavButton noBasePath to="/docs">
          Docs
        </S.NavButton> */}
        <S.NavButton noBasePath to="/uwb-in-3d">
          UWB in 3D
        </S.NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
