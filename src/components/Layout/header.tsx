import styled from 'styled-components'
import ToggleButton from '../toggleButton'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { action } from '@/redux'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
`

const Header = () => {
  const {isDarkMode } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <div></div>

      <ToggleButton 
        toggled={isDarkMode} 
        setToggled={(v) => dispatch(action.app.setDarkMode(v))}
      />
    </HeaderContainer>
  )
}

export default Header