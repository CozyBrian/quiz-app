import QuizItem from "@/components/Quiz/quizItem";
import { Bold, Container, Heading, SParagraph, TextContainer } from "@/components/Styles";
import { QuizData } from "@/constants";
import styled from "styled-components"

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
