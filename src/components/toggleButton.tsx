import { MoonDarkIcon, MoonLightIcon, SunDarkIcon, SunLightIcon } from "@/assets/images";
import { COLORS } from "@/constants"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ToggleContainer = styled.button`
  display: flex;
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: 999px;
  background-color: ${COLORS.purple};
`;

const ToggleCircle = styled.div<{ $toggled: boolean; }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background-color: ${COLORS.white};
  margin: 4px;
  transform: ${({ $toggled }) => $toggled ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 0.15s;
`;

type ToggleButtonProps = {
  toggled: boolean;
  setToggled: (toggled: boolean) => void;
}

const ToggleButton = ({ toggled, setToggled }: ToggleButtonProps) => {
  return (
    <Wrapper>
       <img src={
        toggled ? SunLightIcon : SunDarkIcon
       } alt="sun" />
      <ToggleContainer tabIndex={1} onClick={() => setToggled(!toggled)}>
        <ToggleCircle $toggled={toggled} />
      </ToggleContainer>
       <img src={
        toggled ? MoonLightIcon : MoonDarkIcon
       } alt="sun" />
    </Wrapper>
  )
}

export default ToggleButton