import styled, { keyframes } from 'styled-components';
const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const MainIntroTotal = styled.div`
  animation: ${fadeOut} 2s ease-out 1s forwards;

  overflow-y: hidden;
`;
export const SubTitle = styled.div`
  font-size: 1.1rem;
  color: #000000;
  opacity: 46%;
  text-align: center;
  margin-top: 13.7rem;
`;

export const MainTitle = styled.div`
  margin-top: 0.7rem;
  font-size: 4rem;
  text-align: center;
`;

export const MainImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  @media (max-height: 850px) {
    position: fixed;
    bottom: -100px;
  }
  ${media[2]} {
    width: 391px;
  }
`;
