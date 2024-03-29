import styled from 'styled-components';

export const Container = styled.div<{ isHidden?: boolean }>`
  position: relative;
  height: 197px;
  background-size: cover;
  overflow: hidden;
  text-overflow: ellipsis;

  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
  transition:
    opacity 3s ease-out,
    visibility 3s ease-out;
`;

export const Input = styled.textarea<{ isBlur?: Boolean }>`
  font-family: 'NanumPen';
  font-size: 2.4rem;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  text-overflow: ellipsis;
  line-height: 1.4;
  filter: ${(props) => props.isBlur && 'blur(5px)'};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 230px;
  height: 197px;

  border: none;
  outline: none;
  padding: 0.6rem 1.6rem;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
`;
