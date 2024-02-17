import styled from "styled-components";

import BgMbDown from "../../images/MainPageHero/down-right-MB-2x.png"
import BgMbLeft from "../../images/MainPageHero/left-MB-2x.png"
import BgMbTri from "../../images/MainPageHero/triangle-Mb.png"
import BgTbLeft from "../../images/MainPageHero/bg.left2x.png";
import BgTbDown from "../../images/MainPageHero/down-right-TB-2x.png";
import BgTriangle from "../../images/MainPageHero/Triangle-TB-2x.png";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 132px 10px 83px 10px;
  background-image: -webkit-image-set(
   
      url(${BgMbLeft}) 2x
    ),
    -webkit-image-set( url(${BgMbDown}) 2x),
    url(${BgMbTri});

  background-position: top 46px left, top 55px right, top 145px right;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
  
    background-image: -webkit-image-set(
       
        url(${BgTbLeft}) 2x
      ),
      -webkit-image-set(url(${BgTbDown}) 2x
            ),
      url(${BgTriangle});
    background-position: top left, top 100px right, top -204px left 520px;
    padding-top: 159px;
  }

  
`;


export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
  }
`;
export const TitleWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap:14px;
  @media screen and (min-width: 768px) {
 align-items: flex-start;
 gap:24px;

  }
`
export const MainTitle = styled.div`
  font-size: 60px;
  color: var(--color-text-6);
  letter-spacing: -0.3px;
  line-height: 1;

  & span {
    color: var(--color-text-5);
  }
  @media screen and (min-width: 768px) {
    font-size: 72px;
    text-align: center;

  }
`;
export const TextContent = styled.div`
  color: var(--color-text-4);
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.28px;
  max-width: 362px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    text-align:left;
  }
`;
