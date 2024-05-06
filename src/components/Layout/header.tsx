import styled from 'styled-components'
import ToggleButton from '../toggleButton'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { action } from '@/redux'
import CurrentQuiz from './currentQuiz'
import { useParams } from 'react-router-dom'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
`

const Header = () => {
  const { quiz } = useParams();
  const {isDarkMode } = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <CurrentQuiz title={quiz ?? ""} />

      <ToggleButton 
        toggled={isDarkMode} 
        setToggled={(v) => dispatch(action.app.setDarkMode(v))}
      />
    </HeaderContainer>
  )
}

export default Header