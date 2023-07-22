import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const items2 = [
  {
    menu: 'menu1',
    items: [
      {
        title: 'Biryani',
      },
      {
        title: 'Chicken Biryani',
      },
      {
        title: 'Ceaser Salad',
      },
    ],
  },
];

export default function SearchAppBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState<string[]>(['']);

  useEffect(() => {
    const i = items2[0].items;
    setItems(i.filter((i) => i.title.includes(searchTerm)).map((i) => i.title));
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
          >
            <MenuIcon />
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
              height: '75px',
              marginTop: '15px',
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search cuisine or restaurant"
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
