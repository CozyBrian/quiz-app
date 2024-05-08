import { CorrectIcon, IncorrectIcon } from '@/assets/images';
import { COLORS } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/hooks';
import { action } from '@/redux';
import classNames from 'classnames';
import styled from 'styled-components';

const ChoiceItemContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  height: 64px;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  /* &:focus {
    outline: 2px solid ${COLORS.purple};
    outline-offset: 4px;
  } */

  &.submitted {
    cursor: default;
  }

  &.selected {
    border: 3px solid ${COLORS.purple};
    padding: 9px;
  }
  
  &.selected.wrong {
    border: 3px solid ${COLORS.red}; 
  }
  
  &.selected.correct {
    border: 3px solid ${COLORS.green}; 
  }
  
  .dark & {
    background-color: ${COLORS.gray700};
    box-shadow: 0px 16px 40px 0px rgba(49, 62, 81, 0.14);
  }
  
  img {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 648px) {
    & {
      height: 80px;
      border-radius: 24px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 1172px) {
    & {
      height: 96px;
      padding: 20px;
    }

    &.selected {
      padding: 17px;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (min-width: 648px) {
    gap: 32px; 
  }
`;

const ChoiceItemIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${COLORS.gray100};
  border-radius: 6px;

  color: ${COLORS.gray500};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 100%; /* 18px */
  aspect-ratio: square;

  .choiceItem:hover &, .choiceItem:focus & {
    color: ${COLORS.purple};
    background-color: #F6E7FF;  
  }

  .submitted:hover &, .submitted:focus & {
    color: ${COLORS.gray500};
    background-color: ${COLORS.gray100}; 
  }

  .selected &, .selected:hover &, .selected:focus & {
    color: ${COLORS.white};
    background-color:${COLORS.purple}; 
  }
  
  .selected.wrong & {
    color: ${COLORS.white};
    background-color:${COLORS.red}; 
  }
  
  .selected.correct & {
    color: ${COLORS.white};
    background-color:${COLORS.green};   
  }

  @media (min-width: 648px) {
    & {
      
      width: 56px;
      height: 56px;
      font-size: 28px;
      border-radius: 12px;
    }
  }

  @media (min-width: 1172px) {
    & {
      border-radius: 6.4px;
    }
  }

  transition: color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
`;

const ChoiceItemText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;

  @media (min-width: 648px) {
    font-size: 28px;
  }
`;

const ChoiceItem = ({
  option,
  label,
  isCorrectAnswer
}: {
  option: string;
  label: string;
  isCorrectAnswer: boolean;
}) => {
  const {selectedOption, submitted} = useAppSelector(state => state.quiz)
  const dispatch = useAppDispatch();

  const isSelected = selectedOption === label;
  const isCorrect = isSelected && isCorrectAnswer;

  return (
    <ChoiceItemContainer 
      onClick={() => {
        if (submitted) return;
        dispatch(action.quiz.setShowError(false))
        dispatch(action.quiz.setSelectedOption(label))
      }}
      className={classNames(
        "choiceItem",
        isSelected ? "selected" : "",
        submitted && isSelected && isCorrect && "correct",
        submitted && isSelected && !isCorrect && "wrong",
        submitted && "submitted"
      )} 
    >
      <LeftSection>
        <ChoiceItemIcon className="choiceIcon">
          {option}
        </ChoiceItemIcon>
        <ChoiceItemText>
          {label}
        </ChoiceItemText>
      </LeftSection>
      {submitted && !isSelected && isCorrectAnswer && (
        <img src={CorrectIcon} alt="Correct" />
      )} 
      {submitted && isSelected && (
        <img src={isCorrect ? CorrectIcon : IncorrectIcon} alt="Correct" />
      )} 
    </ChoiceItemContainer>
  )
}

export default ChoiceItem