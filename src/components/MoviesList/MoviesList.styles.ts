import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1360px;
  padding: 40px 0;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  width: fit-content;
  border: none;
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
