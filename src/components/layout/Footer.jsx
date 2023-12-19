import React from "react";
import styled from "styled-components";

import footerHome from "../../assets/Button/footerHome.svg";
import footerRecruit from "../../assets/Button/footerRecruit.svg";
import footerHelp from "../../assets/Button/footerHelp.svg";
import footerMyPage from "../../assets/Button/footerMyPage.svg";

function Footer() {
  const FooterContainer = styled.div`
    /* width: 100%; */
    height: 64px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  `;

  const HomeBtn = styled.button`
    background-image: url(${footerHome});
    background-repeat: no-repeat;
    width: 53px;
    height: 50px;
    align-items: center;
    justify-content: center;
  `;
  const RecruitBtn = styled.button`
    background-image: url(${footerRecruit});
    background-repeat: no-repeat;
    width: 53px;
    height: 50px;
    align-items: center;
    justify-content: center;
  `;
  const HelpBtn = styled.button`
    background-image: url(${footerHelp});
    background-repeat: no-repeat;
    width: 53px;
    height: 50px;
    align-items: center;
    justify-content: center;
  `;
  const MyPageBtn = styled.button`
    background-image: url(${footerMyPage});
    background-repeat: no-repeat;
    width: 53px;
    height: 50px;
    align-items: center;
    justify-content: center;
  `;

  return (
    <FooterContainer>
      <HomeBtn />
      <RecruitBtn />
      <HelpBtn />
      <MyPageBtn />
    </FooterContainer>
  );
}

export default Footer;
