import styled from "styled-components";
import {FiSettings} from "react-icons/fi";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import {Container} from "../../styles/globalStyles";
import Bitcoin from "../../assets/images/Bitcoin.jpg";
import Bitcoin2 from "../../assets/images/Bitcoin2.jpg";

export const Hero = styled.div`
  z-index: 13;
  background: unset;
`;

export const SpinnerBox = styled.div`
  z-index: 13;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  background-color: #1d1d1d;
  top: 20em;
  width: 52.44px;
  height: 50px;
`;

export const SpiningSetting = styled(FiSettings)`
  z-index: 11;
  width: 25px;
  height: 25px;
  color: #fff;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 2s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const HeroContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  background: unset;
  width: 100%;
`;
export const BitCoin1 = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: 0.6s all ease-in-out;
  left: ${({right}) => (right ? `0 ` : `-100%`)};
  background-image: url(${Bitcoin});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BitCoin2 = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: 0.6s all ease-in-out;
  right: ${({right}) => (right ? `-100% ` : `0`)};
  background-image: url(${Bitcoin2});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MotivationMessage = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  @media only screen and (max-width: 524px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 15px;
  }
`;

export const HeroMessage = styled.h4``;

export const HeroMessageSpan = styled.span`
  color: #fd961a;
`;

export const ArrowsButton = styled.button`
  border: none;
  outline: none;
  background: unset;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  color: #fd961a;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const ArrowFoward = styled(IoIosArrowForward)`
  color: #fd961a;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
