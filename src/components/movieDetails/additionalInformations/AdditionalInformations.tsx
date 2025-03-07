import { Button, Rating } from '@mui/material';
import { RatingWrapper, Wrapper } from './AdditionalInformations.styles';
import { AdditionalInformationsProps } from './AdditionalInformations.types';

export const AdditionalInformations = ({
  voteAverage,
  voteCount,
  homepage,
}: AdditionalInformationsProps) => {
  return (
    <Wrapper>
      <RatingWrapper>
        <strong>Ocena użytkowników</strong>
        <Rating
          name='customized-10'
          precision={0.01}
          value={voteAverage}
          max={10}
          readOnly
        />
        <span>Ilość głosów: {voteCount}</span>
      </RatingWrapper>
      {!!homepage && (
        <Button
          component='a'
          href={homepage}
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            borderRadius: '4px',
            padding: '8px 16px',
            transition: '0.3s',
            color: '#212227',
            backgroundColor: '#8693ab',
            '&:hover': {
              backgroundColor: '#637074',
              transform: 'scale(1.05)',
            },
          }}
        >
          Obejrzyj teraz!
        </Button>
      )}
    </Wrapper>
  );
};
