import React, {useState} from "react";
import {
  AboutBottom,
  AboutContainer,
  AboutDesc,
  AboutMain,
  AboutMainImg,
  AboutMainLeft,
  AboutMainRight,
  AboutRightDesc,
  AboutRightLi,
  AboutRightNav,
  AboutRightTitle,
  AboutRightUl,
  AboutSection,
  AboutTitle,
  AboutTop,
  AboutTopDesc,
  AboutTopIcons,
  AboutTopNav,
  AboutTopNavDesc,
  AboutTopNavTitle,
} from "./about.style";
import wallet from "../../assets/images/bitcoinwallet.png";
import payment from "../../assets/images/payment-options.png";
import security from "../../assets/images/strong-security.png";
import about from "../../assets/images/about.png";
import {SignUp} from "../navbar/navbar.style";

const About = () => {
  const [active, setActive] = useState(1);
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTop>
          <AboutTopNav>
            <AboutTopIcons src={wallet} />
            <AboutTopNavDesc>
              <AboutTopNavTitle>A Very Good Wallet</AboutTopNavTitle>
              <AboutTopDesc>
                Get it on PC or Mobile to create, send and receive your crypto.
              </AboutTopDesc>
            </AboutTopNavDesc>
          </AboutTopNav>
          <AboutTopNav>
            <AboutTopIcons src={payment} />
            <AboutTopNavDesc>
              <AboutTopNavTitle>Secure Payment</AboutTopNavTitle>
              <AboutTopDesc>
                Secure payment using different payment methods that suits you
              </AboutTopDesc>
            </AboutTopNavDesc>
          </AboutTopNav>
          <AboutTopNav>
            <AboutTopIcons src={security} />
            <AboutTopNavDesc>
              <AboutTopNavTitle>Site Encrypted</AboutTopNavTitle>
              <AboutTopDesc>
                End to end encryption on user data and user privacy
              </AboutTopDesc>
            </AboutTopNavDesc>
          </AboutTopNav>
        </AboutTop>
        <AboutBottom>
          <h1>
            ABOUT
            <AboutTitle> US</AboutTitle>
          </h1>
          <AboutDesc>
            A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER BITCOIN
            RELATED INFO
          </AboutDesc>
          <AboutMain>
            <AboutMainLeft>
              <AboutMainImg src={about} />
            </AboutMainLeft>
            <AboutMainRight>
              <AboutRightTitle>ABOUT BAYYA</AboutRightTitle>
              <AboutRightDesc>
                Donec sollicitudin molestie malesuada. Donec rutrum congue leo
                eget malesuada. Praesent sapien massa, convallis a pellentesque
                nec, egestas non nisi.
              </AboutRightDesc>
              <AboutRightNav></AboutRightNav>

              <AboutRightNav>
                <AboutRightUl>
                  <AboutRightLi
                    active={active === 1}
                    onClick={() => setActive(1)}
                  >
                    About Us
                  </AboutRightLi>
                  |
                  <AboutRightLi
                    active={active === 2}
                    onClick={() => setActive(2)}
                  >
                    Our Mission
                  </AboutRightLi>
                  |
                  <AboutRightLi
                    active={active === 3}
                    onClick={() => setActive(3)}
                  >
                    Our Guarantee
                  </AboutRightLi>
                </AboutRightUl>
              </AboutRightNav>
              {active === 1 ? (
                <AboutRightDesc>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi.
                </AboutRightDesc>
              ) : active === 2 ? (
                <AboutRightDesc>
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Proin eget tortor risus.
                </AboutRightDesc>
              ) : (
                <AboutRightDesc>
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Vivamus{" "}
                </AboutRightDesc>
              )}
              <SignUp>READ MORE</SignUp>
            </AboutMainRight>
          </AboutMain>
        </AboutBottom>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
