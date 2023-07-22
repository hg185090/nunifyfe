import { styled, Box, Button, Rating } from '@mui/material';
import { KeyboardArrowRightRounded } from '@mui/icons-material';
import '../../App.css';

const StyledSubtile = styled('div')({
  display: 'flex',
  flexShrink: '0',
  width: '350px',
  height: '160px',
  border: '2px solid #ddd',
  borderRadius: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  marginRight: '10px',
  marginTop: '15px',
  textAlign: 'center',
  padding: '10px',
});

const itemStyles = {
  width: '110px',
  height: '110px',
  borderRadius: '8px',
};

interface CuisineProps {
  title: string;
  cost: number;
  rating: number;
  image: string;
}

const CuisineCard = (props: CuisineProps) => (
  <StyledSubtile>
    <Box className="left">
      <Box
        sx={{
          fontWeight: '700',
          fontSize: '1.5rem',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: '200px',
        }}
      >
        {props.title}
      </Box>
      <span style={{ fontWeight: '600' }}>{props.cost}</span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        <Rating
          name="read-only"
          value={props.rating}
          readOnly
          sx={{ fontSize: '20px' }}
        />{' '}
        <span style={{ fontWeight: '500' }}>{props.rating}</span>
      </span>
      <Button
        variant="outlined"
        color="success"
        sx={{
          borderRadius: '15px',
          borderColor: '#ddd',
          marginTop: '20px',
          width: '130px',
          fontSize: '12px',
        }}
        endIcon={<KeyboardArrowRightRounded />}
      >
        More Details
      </Button>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <img
        src={props.image}
        style={{ ...itemStyles, objectFit: 'cover' }}
        alt="Biryani"
      ></img>
      <Button
        variant="contained"
        color="success"
        sx={{
          width: '50px',
          height: '20px',
          fontSize: '12px',
          position: 'relative',
          left: '20px',
          top: '-5px',
          borderRadius: '25px',
        }}
      >
        Add
      </Button>
    </Box>
  </StyledSubtile>
);

export default CuisineCard;
