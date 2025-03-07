import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1360px;
  gap: 20px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  width: fit-content;
  border: none;
  border-radius: 4px;
  width: 200px;
  height: 50px;
  padding: 0;
  background: #8693ab;
  color: #212227;

  &:hover {
    background: #637074;
    cursor: pointer;
  }
`;
