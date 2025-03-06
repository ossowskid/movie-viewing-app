import { Wrapper } from './Details.styles';
import { DetailsProps } from './Details.types';
import { HeaderDetails } from '../headerDetails/HeaderDetails';
import { Overview } from '../overview/Overview';
import { AdditionalInformations } from '../additionalInformations/AdditionalInformations';

export const Details = ({
  title,
  genres,
  overview,
  releaseDate,
  tagline,
  voteAverage,
  voteCount,
  homepage,
  runtime,
}: DetailsProps) => {
  return (
    <Wrapper>
      <HeaderDetails
        title={title}
        genres={genres}
        releaseDate={releaseDate}
        runtime={runtime}
      />
      <Overview tagline={tagline} overview={overview} />
      <AdditionalInformations
        voteAverage={voteAverage}
        voteCount={voteCount}
        homepage={homepage}
      />
    </Wrapper>
  );
};
