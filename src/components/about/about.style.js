import styled from "styled-components";
import {Container} from "../../styles/globalStyles";

export const AboutSection = styled.div`
  position: relative;
  z-index: 12;
  background-color: #111111;
`;

export const AboutContainer = styled(Container)`
  height: 100%;
  background-color: #111111;
`;

//
export const AboutTop = styled(Container)`
  position: relative;
  top: -4em;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  border-radius: 0.6em;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 198px;
  background-color: #1d1d1d;
  @media only screen and (max-width: 990px) {
    display: flex;
    flex-flow: column;
    width: 80%;
    height: 100%;
  }
  @media only screen and (max-width: 765px) {
    width: 95%;
  }
  @media only screen and (max-width: 586px) {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
`;

export const AboutTopNav = styled.div`
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 765px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  @media only screen and (max-width: 586px) {
    display: flex;
    flex-flow: column;
    height: 10em;
  }
`;

export const AboutTopIcons = styled.img`
  color: #fd961a;
  width: 50px;
  height: 50px;
  margin-top: 2px;
  @media only screen and (max-width: 990px) {
    margin-bottom: 15px;
  }
`;

export const AboutTopNavDesc = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  margin: 0 10px;
  @media only screen and (max-width: 990px) {
    margin-bottom: 15px;
    padding: 0;
    text-align: center;
  }
`;

export const AboutTopNavTitle = styled.h3`
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #fff;
  @media only screen and (max-width: 300px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 200px) {
    font-size: 10px;
  }
`;

export const AboutTopDesc = styled.p`
  padding: 0;
  color: #dddddd;
  line-height: 1.4em;
  @media only screen and (max-width: 300px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 200px) {
    font-size: 10px;
  }
`;

export const AboutBottom = styled.div`
  display: flex;
  flex-flow: column;
  color: #fff;
  align-items: center;
`;

export const AboutTitle = styled.span`
  color: #fd961a;
`;

export const Hr = styled.hr`
  background-color: #fd961a;
  width: 4em;
`;
export const AboutDesc = styled.p`
  &::before,
  &::after {
    display: inline-block;
    content: "";
    border-top: 0.3rem solid #fd961a;
    width: 4rem;
    margin: 0 1rem;
    transform: translateY(-0.2rem);

    @media only screen and (max-width: 954px) {
      display: none;
    }
  }
`;
export const AboutMain = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const AboutMainLeft = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 35%;
  @media only screen and (max-width: 425px) {
    flex: 1 1 100px;
  }
`;
export const AboutMainImg = styled.img`
  width: 25em;
  height: 25em;
  @media only screen and (max-width: 450px) {
    width: 10em;
    height: 10em;
  }
`;

export const AboutMainRight = styled.div`
  flex: 1 1 35%;
  text-align: center;
  @media only screen and (max-width: 450px) {
    flex: 1 1 100px;
  }
`;

export const AboutRightTitle = styled.h2``;
export const AboutRightDesc = styled.div`
  margin: 1.5em 0;
`;
export const AboutRightNav = styled.div``;
export const AboutRightUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  padding: 0;
  justify-content: flex-start;
  align-items: center;
`;
export const AboutRightLi = styled.li`
  margin: 0 2em;
  font-weight: bold;
  font-size: 1.1em;
  transition: 0.3s all ease-in-out;
  color: ${({active}) => (active ? `#fd961a` : `#fff`)};
  cursor: pointer;
  @media only screen and (max-width: 425px) {
    margin: 0 0.5em;
    width: 100%;
  }
  @media only screen and (max-width: 260px) {
    margin: 0;
    width: 100%;
  }
`;
