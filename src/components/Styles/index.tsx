import { COLORS } from "@/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  z-index: 10;
  color: ${COLORS.gray900};
  overflow: visible;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 648px) {
    & {
      gap: 48px;
    }
  }
`;

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: 300;
  line-height: 100%;
  gap: 8px;

  @media (min-width: 648px) {
    & {
      font-size: 64px;
    }
  }
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const SParagraph = styled.p`
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

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: ${COLORS.purple};
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 16px 40px 0px rgba(143, 160, 193, 0.14);

  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 28px */

  &:focus {
    outline: 2px solid ${COLORS.purple};
    outline-offset: 4px;
  }

  &:hover {
    opacity: 50%;
  }

  .dark & {
    box-shadow: 0px 16px 40px 0px rgba(49, 62, 81, 0.14);
  }

  @media (min-width: 648px) {
    & {
      height: 92px;
      border-radius: 24px;
      font-size: 28px;
    }
  }

  @media (min-width: 1172px) {
    & {
      height: 92px;
      padding: 20px;
    }
  }

  transition: opacity 0.1s ease-in-out;
`;