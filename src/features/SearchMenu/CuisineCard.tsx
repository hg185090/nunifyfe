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

const CuisineCard = () => (
  <StyledSubtile>
    <Box className="left">
      <Box sx={{ fontWeight: '700', fontSize: '1.5rem' }}>Chicken Biryani</Box>
      <span style={{ fontWeight: '600' }}>$10.50</span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        <Rating
          name="read-only"
          value={4}
          readOnly
          sx={{ fontSize: '20px' }}
        />{' '}
        <span style={{ fontWeight: '500' }}>4.0 (5489)</span>
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
        src="https://media.istockphoto.com/id/1254720533/photo/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-vegetarian-food.jpg?s=2048x2048&w=is&k=20&c=6-f4wQM4rqrur07htjQLlOkfIXBezJNdtorFXI1CqqM="
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
