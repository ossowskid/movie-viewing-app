import styled, { css } from 'styled-components';

const boxStyles = css`
  display: flex;
  flex-flow: row;
  gap: 20px;
  background: #aab9cf;
  border-radius: 4px;
`;

export const SkeletonBox = styled.div`
  ${boxStyles};
  padding: 32px 16px;
  justify-content: flex-start;
`;

export const SkeletonDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 10px;
`;

export const SkeletonHeaderWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const SkeletonOverviewWrapper = styled.div`
  height: 250px;
`;

export const SkeletonOverviewDetails = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const SkeletonAdditionalInformationsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const SkeletonRatingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const SkeletonProductionCompanies = styled.div`
  ${boxStyles};
  justify-content: center;
  align-items: center;
  height: 160px;
`;
