import { Skeleton } from '@mui/material';
import {
  SkeletonAdditionalInformationsWrapper,
  SkeletonBox,
  SkeletonDetails,
  SkeletonHeaderWrapper,
  SkeletonOverviewDetails,
  SkeletonOverviewWrapper,
  SkeletonProductionCompanies,
  SkeletonRatingWrapper,
  SkeletonWrapper,
} from './MovieDetailsSkeleton.styles';

export const MovieDetailsSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton variant={'rounded'} width={162} height={40} />
      <SkeletonBox>
        <Skeleton variant={'rectangular'} width={300} height={450} />
        <SkeletonDetails>
          <SkeletonHeaderWrapper>
            <Skeleton variant={'rounded'} height={37} width={450} />
            <Skeleton variant={'rounded'} height={18} width={400} />
          </SkeletonHeaderWrapper>
          <SkeletonOverviewWrapper>
            <Skeleton
              variant={'rounded'}
              height={22}
              width={300}
              sx={{ marginTop: '19px', marginBottom: '19px' }}
            />
            <SkeletonOverviewDetails>
              <Skeleton variant={'rounded'} height={18} width={40} />
              <Skeleton variant={'rounded'} height={90} width={450} />
            </SkeletonOverviewDetails>
          </SkeletonOverviewWrapper>
          <SkeletonAdditionalInformationsWrapper>
            <SkeletonRatingWrapper>
              <Skeleton variant={'rounded'} height={18} width={147} />
              <Skeleton variant={'rounded'} height={24} width={240} />
              <Skeleton variant={'rounded'} height={18} width={122} />
            </SkeletonRatingWrapper>
          </SkeletonAdditionalInformationsWrapper>
        </SkeletonDetails>
      </SkeletonBox>
      <SkeletonProductionCompanies>
        <Skeleton variant={'rectangular'} width={100} height={100} />
        <Skeleton variant={'rectangular'} width={100} height={100} />
        <Skeleton variant={'rectangular'} width={100} height={100} />
      </SkeletonProductionCompanies>
    </SkeletonWrapper>
  );
};
