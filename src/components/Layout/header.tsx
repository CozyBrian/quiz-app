import styled from 'styled-components'
import ToggleButton from '../toggleButton'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { action } from '@/redux'
import CurrentQuiz from './currentQuiz'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  z-index: 20;
`

const Header = () => { 
  const {isDarkMode } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <CurrentQuiz />

      <ToggleButton 
        toggled={isDarkMode} 
        setToggled={(v) => dispatch(action.app.setDarkMode(v))}
      />
    </HeaderContainer>
  )
}

export default Header