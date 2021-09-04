import styled from "styled-components";
import {Container} from "../../styles/globalStyles";
import {ImUser, ImUserPlus} from "react-icons/im";
import {FaBars, FaTimes} from "react-icons/fa";

export const Nav = styled.div`
  z-index: 34;
  position: relative;
  display: flex;
  flex-flow: column;
  background-color: #1d1d1d;
  @media only screen and (max-width: 1000px) {
    height: 225px;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 420px) {
    height: 120px;
  }
`;

export const TopNav = styled(Container)`
  display: flex;
  z-index: 33;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  background-color: #1d1d1d;
  height: 141px;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 225px;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 420px) {
    height: 120px;
  }
`;
export const MobileMenuBox = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    z-index: 34;
    display: block;
    position: fixed;
    top: 0.5em;
    right: 1.5em;
    cursor: pointer;
  }
  @media only screen and (max-width: 224px) {
    top: 0.8em;
    right: 0.5em;
  }
`;

export const MobileMenu = styled(FaBars)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    z-index: 23;
    width: 35px;
    height: 35px;
    color: #fd961a;
  }
  @media only screen and (max-width: 224px) {
    width: 30vw;
    height: 22px;
  }
`;
export const MobileMenuExit = styled(FaTimes)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    z-index: 23;
    width: 35px;
    height: 35px;
    color: #fd961a;
  }
  @media only screen and (max-width: 224px) {
    width: 30vw;
    height: 22px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 92px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLogo2 = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    z-index: 34;
    position: fixed;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 42px;
    top: 4px;
    left: 1.5em;
  }
  @media only screen and (max-width: 224px) {
    width: 50vw;
  }
`;

export const LogoImg = styled.img`
  width: 133px;
  height: 42px;
  @media only screen and (max-width: 200px) {
    width: 50vw;
    height: 32px;
  }
`;
export const TopStat = styled.li`
  @media only screen and (max-width: 704px) {
    flex: 1 0 1;
  }
`;

export const StatTitle = styled.h6`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  @media only screen and (max-width: 704px) {
    flex: 1 0 100px;
    margin: 1em 0 0.5em 0;
  }
`;

export const TopStatUl = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 653px;
  height: 72px;
  list-style: none;
  margin: 0 15px;
  padding: 28px 0 0 0;
  & ${TopStat}:nth-last-child(1) ${StatTitle} {
    color: #fd961a;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0;
    margin: 4em auto 2em auto;
    height: 55px;
  }
  @media only screen and (max-width: 704px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 95vw;
    margin: 4em auto 2em auto;
    height: 72px;
  }
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;

export const StatDesc = styled.span`
  color: #aaaaaa;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  @media only screen and (max-width: 704px) {
    flex: 1 0 100px;
    margin: 1em 0.5em 0 0;
  }
`;

export const NavButtons = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 262px;
  height: 68px;
  list-style: none;
  margin: 0;
  padding: 28px 0 0 0;
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
  @media only screen and (max-width: 570px) {
    width: 95vw;
  }
  @media only screen and (max-width: 420px) {
    margin-top: 4em;
  }
`;
export const NavBtnLi = styled.li``;

export const SignIn = styled.button`
  width: 96.94px;
  background-color: unset;
  height: 42px;
  padding: 11px 0;
  border: 1px solid #fd961a;
  color: #fd961a;
  letter-spacing: 0.3px;
  outline: none;
  font-weight: bold;
  margin-top: 0.7em;
  cursor: pointer;
  &:hover {
    background-color: #fd961a;
    color: #fff;
  }
  @media only screen and (max-width: 570px) {
    width: 45%;
    font-size: 10px;
  }
`;
export const SignUp = styled.button`
  background-color: #fd961a;
  width: 100px;
  height: 42px;
  padding: 11px 0;
  border: none;
  color: #fff;
  letter-spacing: 0.3px;
  font-weight: bold;
  outline: none;
  margin-top: 0.7em;
  cursor: pointer;
  &:hover {
    background-color: #d5811d;
    color: #fff;
  }
  @media only screen and (max-width: 570px) {
    width: 45%;
    font-size: 10px;
  }
`;
export const UserIcon = styled(ImUser)`
  width: 15px;
  height: 12px;
`;

export const AddUserIcon = styled(ImUserPlus)`
  width: 16px;
  height: 11px;
`;

export const NavMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 34;
  display: flex;
  transition: 0.6s height ease-in-out;
  height: 55px;
  flex-flow: row;
  justify-content: center;
  background-color: #111111;
  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
  }
`;
export const NavMenuItems = styled.ul`
  z-index: 34;
  background-color: #111111;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 48px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    margin-top: 2em;
    position: relative;
    top: ${({open}) => (open ? `0` : `-80vh`)};
    transition: 0.5s top ease-in-out;
    height: 80vh;
    width: 100vw;
  }
  @media only screen and (max-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export const NavMenuList = styled.li`
  color: white;
  font-weight: bold;
  padding: 0 0;
  margin: 0 30px;
  font-size: 17px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 0.2em 0;
    padding: 1em 0;
    background-color: #111111;
    width: 100%;
    text-align: center;
    font-size: 1.1em;

    &:hover {
      background-color: #000;
    }
  }
  @media only screen and (max-width: 200px) {
    font-size: 0.6em;
  }
`;
