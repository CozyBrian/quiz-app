import { IncorrectIcon } from '@/assets/images';
import ChoiceItem from '@/components/Quiz/choiceItem';
import FinishedScreen from '@/components/Quiz/finishedScreen';
import { Container, PrimaryButton } from '@/components/Styles'
import { COLORS, QuizData } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { action } from '@/redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 648px) {
    gap: 40px;
  }

  @media (min-width: 1172px) {
    gap: 168px;
    max-width: 465px;
  }
`;

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bar = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 999px;
  padding: 4px;

  background-color: #fff;

  .dark & {
    background-color: ${COLORS.gray700};
  }
`;

const BarInner = styled.div<{ $progress: number }>`
  width: calc(100% * ${({ $progress }) => $progress});
  height: 100%;
  background-color: ${COLORS.purple};
  border-radius: 999px;
  transition: width 0.15s ease-in-out;
`;

const CurrentQuestionText = styled.p`
  font-size: 14px;
  line-height: 150%;
  font-style: italic;
  font-weight: 400;
  color: ${COLORS.gray500};

  .dark & {
    color: ${COLORS.gray300};
  }

  @media (min-width: 648px) {
    font-size: 20px;
  }

  transition: color 0.15s ease-in-out;
`;

const Question = styled.p`
  color: ${COLORS.gray900};
  font-family: Rubik;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  line-height: 150%;

  @media (min-width: 648px) {
    font-size: 36px;
    font-style: normal;
    line-height: 120%; /* 43.2px */
  }
  
  @media (min-width: 1172px) {
    max-width: 465px;
  }

  .dark & {
    color: #fff;
  }
`;

const AnswersSection = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 648px) {
    gap: 24px;
  }

  @media (min-width: 1172px) {
    width: 564px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${COLORS.red};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */

  img {
    width: 32px;
    height: 32px;
  }
`;

const OPTIONS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const dispatch = useAppDispatch();
  const quiz = useParams<{ quiz: string }>().quiz ?? "";
  const { currentQuestion, selectedOption, submitted, showError } = useAppSelector(state => state.quiz);
  const { questions } = QuizData.find(q => q.title === quiz)!
  const [isFinished, setIsFinished] = useState(false);
  
  return (
    <Container className='quiz'>
      {isFinished ? <FinishedScreen /> : (<>
        <QuestionSection>
          <Upper>
            <CurrentQuestionText>
              Question {currentQuestion + 1} of {questions.length}
            </CurrentQuestionText>
            <Question>
              {questions[currentQuestion].question}
            </Question>
          </Upper>
          <Bar>
            <BarInner $progress={(currentQuestion + 1) / questions.length} />
          </Bar>
        </QuestionSection>
        <AnswersSection>
          {
            questions[currentQuestion].options.map((option, i) => (
              <ChoiceItem 
                key={option} 
                option={OPTIONS[i]} 
                label={option} 
                isCorrectAnswer={option === questions[currentQuestion].answer} 
              />
            ))
          }
          <PrimaryButton disabled={showError} onClick={() => {
            if (!submitted) {
              if (selectedOption !== undefined) {
                dispatch(action.quiz.setSubmitted(true))
              } else {
                dispatch(action.quiz.setShowError(true))
              }
            } else {
              if (questions[currentQuestion].answer === selectedOption) {
                dispatch(action.quiz.addPoint())
              }
              if (currentQuestion < questions.length - 1) {
                dispatch(action.quiz.nextQuestion())
              } else {
                setIsFinished(true)
              }
            }
          }}>
            {submitted ? currentQuestion < questions.length - 1 ? "Next Question" : "Finish" : "Submit Answer"}
          </PrimaryButton>
          {showError && (
            <ErrorContainer>
              <img src={IncorrectIcon} alt="incorrent" />
              Please select an answer
            </ErrorContainer>
          )}
        </AnswersSection>
      </>)}
    </Container>
  )
}
