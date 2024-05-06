import { AccessibilityIcon, CssIcon, HtmlIcon, JsIcon } from '@/assets/images';
import { COLORS } from '@/constants'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuizItemContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 12px;
  height: 64px;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  .dark & {
    background-color: ${COLORS.gray700};
    box-shadow: 0px 16px 40px 0px rgba(49, 62, 81, 0.14);
  }

  @media (min-width: 648px) {
    & {
      height: 80px;
      border-radius: 24px;
      gap: 32px;
    }
  }

  @media (min-width: 1172px) {
    & {
      height: 96px;
      padding: 20px;
    }
  }

  transition: background-color 0.15s ease-in-out;
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
`;

const QuizItem = ({
  item
}: {
  item: {
    title: string;
    icon: string;
  }
}) => {
  const navigate = useNavigate();
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
    <QuizItemContainer onClick={() => navigate(`/${item.title}`)}>
      <QuizItemIcon $color={iconData[item.title].color}>
        <img src={iconData[item.title].icon} alt="quiz-icon" />
      </QuizItemIcon>
      <QuizItemText>
        {item.title}
      </QuizItemText>
    </QuizItemContainer>
  )
}

export default QuizItem