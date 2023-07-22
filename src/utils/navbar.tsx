import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import json from '../features/restaurantMenu/menu.json';

const items2 = Object.values(json)
  .map((i) => i.items)
  .flat();

export default function SearchAppBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState<string[]>(['']);

  useEffect(() => {
    setItems(
      items2.filter((i) => i.title.includes(searchTerm)).map((i) => i.title)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'green' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            href="/"
          >
            <HomeOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NUnify
          </Typography>

          <Autocomplete
            freeSolo
            id="auto-complete"
            disableClearable
            onChange={(e) => navigate('/searchMenu')}
            options={items}
            sx={{
              width: '350px',
              //   height: '75px',
              //   marginTop: '15px',
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search cuisine or restaurant"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white', borderRadius: '15px' },
                  type: 'search',
                }}
              />
            )}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
