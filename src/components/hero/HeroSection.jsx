import React, {useState} from "react";
import {SignIn} from "../navbar/navbar.style";
import {
  ArrowBack,
  ArrowFoward,
  ArrowsButton,
  BitCoin1,
  BitCoin2,
  Hero,
  HeroContainer,
  HeroMessage,
  HeroMessageSpan,
  MotivationMessage,
  SpiningSetting,
  SpinnerBox,
} from "./hero.style";

const HeroSection = () => {
  const [right, setRight] = useState(true);
  const [num, setNum] = useState(1);
  const goLeft = () => {
    setRight(!right);
    setNum(1);
  };
  const goRight = () => {
    setRight(!right);
    setNum(2);
  };
  return (
    <>
      <BitCoin1 right={right} />
      <BitCoin2 right={right} />

      <Hero>
        <SpinnerBox>
          <SpiningSetting />
        </SpinnerBox>
        <HeroContainer>
          <ArrowsButton disabled={num === 1} onClick={goLeft}>
            <ArrowBack />
          </ArrowsButton>
          {right ? (
            <MotivationMessage>
              <HeroMessage>
                WE ARE VERY <HeroMessageSpan> SECURE </HeroMessageSpan>
                AND RELIABLE <HeroMessageSpan>HERE</HeroMessageSpan>
              </HeroMessage>
              <SignIn>Learn More</SignIn>
            </MotivationMessage>
          ) : (
            <MotivationMessage>
              <HeroMessage>
                THE EXCHANGE MARKET PLACE <HeroMessageSpan>YOU</HeroMessageSpan>{" "}
                CAN TRUST
              </HeroMessage>
              <SignIn>Learn More</SignIn>
            </MotivationMessage>
          )}

          <ArrowsButton disabled={num === 2} onClick={goRight}>
            <ArrowFoward />
          </ArrowsButton>
        </HeroContainer>
      </Hero>
    </>
  );
};

export default HeroSection;
