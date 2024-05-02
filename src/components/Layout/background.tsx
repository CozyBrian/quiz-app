import { 
  PatternBackgroundDesktopDark, 
  PatternBackgroundDesktopLight, 
  PatternBackgroundMobileDark, 
  PatternBackgroundMobileLight, 
  PatternBackgroundTabletDark, 
  PatternBackgroundTabletLight
} from '@/assets/images';
import { useAppSelector } from '@/hooks';
import styled from 'styled-components';

const Image = styled.img<{ $isDark: boolean }>`
  opacity: ${({ $isDark }) => $isDark ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MobileImage = styled(Image)`
  @media (min-width: 648px) {
    display: none;
  }
  @media (min-width: 1172px) {
    display: none;
  }
`;
const TabletImage = styled(Image)`
  @media (max-width: 647px) {
    display: none;
  }
  @media (min-width: 1172px) {
    display: none;
  }
`;
const DesktopImage = styled(Image)`
  @media (max-width: 647px) {
    display: none;
  }
  @media (max-width: 1171px) {
    display: none;
  }
`;

const Background = () => {
  const { isDarkMode } = useAppSelector(state => state.app);
  return (
    <>
      <MobileImage src={PatternBackgroundMobileLight} alt="background"$isDark={!isDarkMode} />
      <MobileImage src={PatternBackgroundMobileDark} alt="background" $isDark={isDarkMode} />
      <TabletImage src={PatternBackgroundTabletLight} alt="background"$isDark={!isDarkMode} />
      <TabletImage src={PatternBackgroundTabletDark} alt="background" $isDark={isDarkMode} />
      <DesktopImage src={PatternBackgroundDesktopLight} alt="background"$isDark={!isDarkMode} />
      <DesktopImage src={PatternBackgroundDesktopDark} alt="background" $isDark={isDarkMode} />
    </>
  )
}

export default Background