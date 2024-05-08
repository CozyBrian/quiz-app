import QuizItem from "@/components/Quiz/quizItem";
import { Container } from "@/components/Styles";
import { COLORS, QuizData } from "@/constants";
import styled from "styled-components"

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 648px) {
    & {
      gap: 48px;
    }
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 100%;

  @media (min-width: 648px) {
    & {
      font-size: 64px;
    }
  }
`;

const Bold = styled.span`
  font-weight: 500;
`;

const SParagraph = styled.p`
  font-size: 20px;
  line-height: 150%;
  font-style: italic;
  font-weight: 400;
  color: ${COLORS.gray500};

  .dark & {
    color: ${COLORS.gray300};
  }

  transition: color 0.15s ease-in-out;
`;

const QuizList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 564px;

  @media (min-width: 648px) {
    & {
      gap: 24px
    }
  }
`;


export default function Home() {
  return (
    <Container>
      <TextContainer>
        <Heading>
          Welcome to the <br />
          <Bold>Frontend Quiz!</Bold>
        </Heading>
        <SParagraph>Pick a subject to get started.</SParagraph>
      </TextContainer>
      <QuizList>
        {QuizData.map((item) => (
          <QuizItem item={item} key={item.title} />
        ))}
      </QuizList>
    </Container>
  )
}
