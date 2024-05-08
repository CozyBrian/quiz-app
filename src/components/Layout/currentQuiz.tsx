import { AccessibilityIcon, CssIcon, HtmlIcon, JsIcon } from '@/assets/images';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const QuizItemContainer = styled.div<{ $showing: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  opacity: ${(theme) => theme.$showing ? 1 : 0};

  transition: opacity 0.15s ease-in-out;

  @media (min-width: 648px) {
    & {
      gap: 24px;
    }
  }
`;

const QuizItemIcon = styled.div<{ $color: string; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ $color }) => $color};
  border-radius: 6px;

  &>img {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 648px) {
    & {
      width: 56px;
      height: 56px;
      border-radius: 12px;
    }

    &>img {
    width: 40px;
    height: 40px;
  }
  }

  @media (min-width: 1172px) {
    & {
      border-radius: 6.4px;
    }
  }
`;

const QuizItemText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;

  @media (min-width: 648px) {
    font-size: 28px;
  }
  
  .dark & {
    color: #fff;
  }
`;

const CurrentQuiz = () => {
  const { quiz } = useParams();
  const title = quiz ?? "";
  
  const iconData: {
    [x: string] : {
      color: string;
      icon: string;
    };
  } = {
    HTML: { color: "#FFF1E9", icon: HtmlIcon },
    CSS: { color: "#E0FDEF", icon: CssIcon },
    JavaScript: { color: "#EBF0FF", icon: JsIcon },
    Accessibility: { color: "#F6E7FF", icon: AccessibilityIcon },
  };

  return (
    <QuizItemContainer $showing={title !== ""}>
      {title !== "" && <>
        <QuizItemIcon $color={iconData[title].color}>
          <img src={iconData[title].icon} alt="quiz-icon" />
        </QuizItemIcon>
        <QuizItemText>
          {title}
        </QuizItemText>
      </>}
    </QuizItemContainer>
  )
}

export default CurrentQuiz