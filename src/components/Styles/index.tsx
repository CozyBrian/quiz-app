import { COLORS } from "@/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  z-index: 10;
  color: ${COLORS.gray900};

  .dark & {
    color: ${COLORS.gray100};
  }

  transition: color 0.15s ease-in-out;
  padding-top: 58px;

  @media (min-width: 648px) {
    padding-top: 98px;
    &.quiz {
      padding-top: 48px;
    }
  }

  @media (min-width: 1172px) {
    flex-direction: row;
    gap: 130px;
  }
`;