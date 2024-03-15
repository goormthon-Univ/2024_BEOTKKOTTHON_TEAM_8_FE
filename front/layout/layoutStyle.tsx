import styled from 'styled-components';
const breakpoints = [480, 768, 992, 1280];
const media = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Totalframe = styled.div`
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  height: -webkit-fill-available;
  height: fill-available;
  margin: 0 auto;
  overflow-y: auto;
  margin-top: env(safe-area-inset-top);
  margin-bottom: env(safe-area-inset-bottom);
  &::-webkit-scrollbar {
    display: none;
  }
  ${media[3]} {
    width: 391px;
  }
`;