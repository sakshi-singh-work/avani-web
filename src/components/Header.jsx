import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Main>
        <TopHeader>
          <h3>FAST 1 HOUR QUOTES! Call</h3>
          <Mobile href="tel:+919910852911">9910852911</Mobile>
        </TopHeader>
        <MainHeader>
          <NavLink to="/">
            <CompanyName>
              <span className="headertx">Avani</span>{" "}
              <span className="headertx-2">Ecocare</span>
            </CompanyName>
          </NavLink>
          <Navbar />
        </MainHeader>
      </Main>
      <Spacer />
    </>
  );
};

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #13343b;
  color: #fff;
`;

const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #0d2a30;
`;

const Mobile = styled.a`
  color: #cbf4ed;
  font-weight: bold;
  text-decoration: underline;
  margin-left: 8px;
  font-size: 18px;
`;

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .headertx {
    font-size: 2.5rem;
    color: #3a5a40;
    font-weight: bold;
  }
  .headertx-2 {
    font-size: 2.5rem;
    color: grey;
    font-weight: bold;
  }
  .logo {
    height: auto;
    max-width: 25%;
  }
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  height: 120px;
`;

export default Header;
