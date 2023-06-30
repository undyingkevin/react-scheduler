import styled from "styled-components";
import { theme } from "@/styles";
import { boxHeight } from "@/constants";
import { StyledLeftColumnItemWrapperProps, StyledTextProps } from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
  transition: 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
`;
export const StyledImage = styled.img``;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain }) => (isMain ? 0.75 + "rem" : 0.625 + "rem")};
  letter-spacing: ${({ isMain }) => (isMain ? 1 + "px" : 0.5 + "px")};
  line-height: ${({ isMain }) => (isMain ? 1.125 + "rem" : 0.75 + "rem")};
  color: ${({ isMain }) => (isMain ? theme.colors.black : theme.colors.darkGrey)};
`;
