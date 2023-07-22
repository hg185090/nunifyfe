import { styled, Typography, Box } from '@mui/material';
import { StarsRounded, East } from '@mui/icons-material';
import CuisineCard from './CuisineCard';
import { Link } from 'react-router-dom';

const StyledTile = styled('div')({
  margin: '20px',
  width: '96%',
  padding: '20px',
  border: '2px solid #ddd',
  borderRadius: '25px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledTileContent = styled('div')({
  display: 'flex',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  marginTop: '10px',
  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
});

const Tile = () => (
  <StyledTile>
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Hotel Sitara Grand
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StarsRounded style={{ color: 'green', fontSize: '40px' }} />
          <Box sx={{ fontWeight: '500', fontSize: '2rem', marginLeft: '5px' }}>
            3.7 (10K+) . 42 mins
          </Box>
        </Box>
      </div>
      <Link to="/menu">
        {' '}
        <East
          sx={{
            fontSize: '50px',
            right: '-280px',
            position: 'relative',
            top: '10px',
            color: 'black',
          }}
        />
      </Link>
    </div>
    <StyledTileContent className="tile-content">
      <CuisineCard />
      <CuisineCard />
      <CuisineCard />
      <CuisineCard />
    </StyledTileContent>
  </StyledTile>
);

export default Tile;
