import { Outlet } from "react-router-dom";
import Header from "./header";
import styled from "styled-components";
import Background from "./background";
import { useAppSelector } from "@/hooks";
import { COLORS } from "@/constants";
import QuizProvider from "./QuizProvider";

const LayoutContainer = styled.main<{ $isDark: boolean }>`
  height: 100vh;
  width: 100vw;
  padding: 0px 24px;

  background-color: ${({ $isDark }) => $isDark ? COLORS.gray900 : COLORS.gray100};
  transition: background-color 0.15s ease-in-out;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  z-index: 10;
  padding-top: 26px;
  padding-bottom: 26px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  
  
  @media (min-width: 648px) {
    & {
      padding-top: 40px;
      width: 640px;
    }
  }

  @media (min-width: 1172px) {
    & {
      padding: 0 20px;
      padding-top: 86px;
      width: 1200px;
    }
  }
`;

function Layout() {
  const { isDarkMode } = useAppSelector(state => state.app);

  return (
    <LayoutContainer $isDark={isDarkMode} className={isDarkMode ? "dark" : ""}>
      <Background /> 
      <MainContainer>
        <QuizProvider>
          <Header />
          <Outlet />
        </QuizProvider>
      </MainContainer>
    </LayoutContainer>
  );
}

export default Layout;
