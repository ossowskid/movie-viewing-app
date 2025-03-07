import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  gap: 20px;
  background: #aab9cf;
  padding: 32px 16px;
  border-radius: 4px;
`;

export const Image = styled.img`
  min-width: 300px;
  height: 450px;
`;
