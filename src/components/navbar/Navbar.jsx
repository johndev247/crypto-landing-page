import React, {useState} from "react";
import {
  AddUserIcon,
  LogoImg,
  MobileMenu,
  MobileMenuBox,
  MobileMenuExit,
  Nav,
  NavButtons,
  NavLogo,
  NavLogo2,
  NavMenu,
  NavMenuItems,
  NavMenuList,
  SignIn,
  SignUp,
  StatDesc,
  StatTitle,
  TopNav,
  TopStat,
  TopStatUl,
  UserIcon,
} from "./navbar.style";
import logo from "../../assets/images/logo.png";

const Navbar = ({text}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav>
        <TopNav>
          {!text && (
            <>
              {" "}
              <NavLogo>
                <LogoImg src={logo} />
              </NavLogo>
              <TopStatUl>
                <TopStat>
                  <StatTitle> Active Trades</StatTitle>
                  <StatDesc>2035 Trades</StatDesc>
                </TopStat>
                <TopStat>
                  <StatTitle> Bitcoin Price</StatTitle>
                  <StatDesc> 1 BTC = 50,044 USD</StatDesc>
                </TopStat>
                <TopStat>
                  <StatTitle> Ethereum Price</StatTitle>
                  <StatDesc>1 Ether = 3,903 USD </StatDesc>
                </TopStat>
                <TopStat>
                  <StatTitle>Doge Coin Price</StatTitle>
                  <StatDesc>1 Doge = 0.30 USD</StatDesc>
                </TopStat>
              </TopStatUl>
              <NavButtons>
                <SignIn>
                  <UserIcon />
                  <span>SIGN IN</span>
                </SignIn>
                <SignUp>
                  <AddUserIcon />
                  <span>REGISTER</span>
                </SignUp>
              </NavButtons>{" "}
            </>
          )}
        </TopNav>
      </Nav>
      <NavMenu open={open}>
        <NavMenuItems open={open}>
          <NavMenuList>{!text && "HOME"}</NavMenuList>
          <NavMenuList>{!text && "ABOUT"}</NavMenuList>
          <NavMenuList>{text ? text : "HOW IT WORKS"}</NavMenuList>
          <NavMenuList>{!text && "CONTACT"}</NavMenuList>
          <NavMenuList>{!text && "TESTIMONIES"}</NavMenuList>
        </NavMenuItems>
      </NavMenu>
      <NavLogo2>
        <LogoImg src={logo} />
      </NavLogo2>
      <MobileMenuBox>
        {open ? (
          <MobileMenuExit onClick={() => setOpen(false)} />
        ) : (
          <MobileMenu onClick={() => setOpen(true)} />
        )}
      </MobileMenuBox>
    </>
  );
};

export default Navbar;
