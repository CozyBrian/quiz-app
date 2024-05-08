import { COLORS } from '@/constants';
import CurrentQuiz from '../Layout/currentQuiz';
import { TextContainer, Heading, Bold, PrimaryButton } from '../Styles'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { action } from '@/redux';

const FinishedContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 648px) {
    gap: 32px;
  }

  @media (min-width: 1172px) {
    max-width: 564px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 32px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  .dark & {
    background-color: ${COLORS.gray700};
    box-shadow: 0px 16px 40px 0px rgba(49, 62, 81, 0.14);
  }

  @media (min-width: 648px) {
    padding: 48px;
  }

  transition: background-color 0.15s ease-in-out;
`;

const Score = styled.p`
  color: ${COLORS.gray900};
  font-family: Rubik;
  font-size: 88px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 88px */

  .dark & {
    color: #fff;
  }

  @media (min-width: 648px) {
    font-size: 144px;
  }

  transition: color 0.15s ease-in-out;
`;

const Subtitle = styled.p`
  color: ${COLORS.gray500};
  font-family: Rubik;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */

  .dark & {
    color: ${COLORS.gray300};
  }

  @media (min-width: 648px) {
    font-size: 24px;
  }

  transition: color 0.15s ease-in-out;
`;

const FinishedScreen = () => {
  const dispatch = useAppDispatch();
  const { 
    currentQuestion, 
    totalPoints,
  } = useAppSelector(state => state.quiz);
  const navigate = useNavigate();


  return (
    <>
       <TextContainer>
        <Heading>
          Quiz completed <br />
          <Bold>You scored...</Bold>
        </Heading>
      </TextContainer>
      <FinishedContainer>
        <Container>
          <CurrentQuiz />
          <Score>{totalPoints}</Score>
          <Subtitle>out of {currentQuestion + 1}</Subtitle>
        </Container>
        <PrimaryButton onClick={() => {
          dispatch(action.quiz.resetQuiz())
          navigate('/')
        }}>
          Play Again
        </PrimaryButton>
      </FinishedContainer>
    </>
  )
}

export default FinishedScreen