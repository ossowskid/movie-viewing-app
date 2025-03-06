import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  gap: 20px;
  background: #aab9cf;
  height: 160px;
  border-radius: 4px;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100px;
`;

export const StyledImg = styled.img`
  max-height: 100px;
`;
