import '../../App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import json from "./menu.json";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const RestaurantMenu = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [counter, setCounter] = React.useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };
    return (
        <div className='restaurantMenu'>
            <h1>KFC</h1>
            <Box sx={{ width: '90%', margin: 'auto', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Soups & Salads" />
                    <Tab label="Sandwiches & Burgers" />
                    <Tab label="Buffalo Wings" />
                    <Tab label="Pizza & Pasta" />
                    <Tab label="Sides" />
                    <Tab label="Deserts" />
                    <Tab label="Combo Logic Levels" />
                    <Tab label="Modifier Tests" />
                    <Tab label="All items" />
                    <Tab label="AM-Only" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {(Object.entries(json) || []).map(([key, value]) => {
                        return (                  
                            <div  className="menucardDiv" >
                                <div className='imgDIv'>
                                    <img  className="cardImg" src={value.image ? value.image : 'https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png'} alt="Girl in a jacket" width="50" height="60" />
                                </div>
                                <p className="cardHeader">{value.title}</p>
                                <p className="cardtext">{value.description}</p>
                                <div>
                                <Rating name="read-only" value={4} readOnly />
                                </div>
                                {counter === 0 && <Button variant="contained" onClick={handleIncrement} className='cartButton'>Add to cart</Button> }
                                {counter > 0 &&
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={handleIncrement}>+</Button>
                                            <Button>{counter}</Button>
                                            <Button onClick={handleDecrement}>-</Button>
                                    </ButtonGroup>
                                }
                            </div>
                        );
                    })}
                </TabPanel>
            </Box>
        </div>
    );
};


export const RestaurantMenuContainer = (RestaurantMenu);
