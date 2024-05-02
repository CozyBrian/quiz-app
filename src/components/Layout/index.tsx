import { Outlet } from "react-router-dom";
import Header from "./header";
import styled from "styled-components";
import Background from "./background";
import { useAppSelector } from "@/hooks";
import { COLORS } from "@/constants";

const LayoutContainer = styled.main<{ $isDark: boolean }>`
  height: 100vh;
  width: 100vw;

  background-color: ${({ $isDark }) => $isDark ? COLORS.gray900 : COLORS.gray100};
  transition: background-color 0.15s ease-in-out;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 26px;
  z-index: 10;
  
  @media (min-width: 648px) {
    & {
      padding-top: 54px;
      width: 640px;
    }
  }

  @media (min-width: 1172px) {
    & {
      padding-top: 86px;
      width: 1160px;
    }
  }
`;

function Layout() {
  const { isDarkMode } = useAppSelector(state => state.app);
  return (
    <LayoutContainer $isDark={isDarkMode}>
      <Background /> 
      <MainContainer>
        <Header />
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  );
}

export default Layout;
