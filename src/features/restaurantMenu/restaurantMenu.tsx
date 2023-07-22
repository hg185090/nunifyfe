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
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import { BottomNavigation } from '@mui/material';
import { Link } from "react-router-dom";

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
    const [state, setState] = React.useState({
      right: false,
    });

    const [menudata,updateMenu] = React.useState(json.menu1.items)
    const [totalCount,updateCount] = React.useState(menudata.reduce((sum, { count }) => sum + count, 0));
    const [totalCost,updateCost] = React.useState(menudata.reduce((sum, { count, cost }) => sum + (count * cost), 0));
  
    const toggleDrawer =
      (anchor: any, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setState({ ...state, [anchor]: open });
      };
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleIncrement = (key: any) => {
        menudata[key].count = menudata[key].count+1;
        updateMenu([...menudata]);
        updateCount(menudata.reduce((sum, { count }) => sum + count, 0));
        updateCost(menudata.reduce((sum, { count, cost }) => sum + (count * cost), 0));
    };

    const handleDecrement = (key: any) => {
        menudata[key].count = menudata[key].count-1;
        updateMenu([...menudata]);
        updateCount(menudata.reduce((sum, { count }) => sum + count, 0));
        updateCost(menudata.reduce((sum, { count, cost }) => sum + (count * cost), 0));
    };

    

    // const list = (anchor: any) => (
        
    //   );
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
                    {menudata.map((value, index) => {
                        return (                  
                            <div  className="menucardDiv">
                                <div className='imgDIv'>
                                    <img  className="cardImg" src={value.image ? value.image : 'https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png'} alt="Girl in a jacket" width="50" height="60" />
                                </div>
                                <p className="cardHeader">{value.title}</p>
                                <p className="cardtext">{value.description}</p>
                                <div>
                                <Rating name="read-only" value={value.rating} readOnly />
                                </div>
                                {value.count === 0 && <Button variant="contained" onClick={() => handleIncrement(index)} className='cartButton'>Add to cart</Button> }
                                {value.count > 0  &&
                                    <ButtonGroup size="small" color='success' aria-label="small outlined button group">
                                        <Button onClick={() => handleDecrement(index)}>-</Button>
                                            <Button>{menudata[index].count}</Button>
                                        <Button onClick={() => handleIncrement(index)}>+</Button>
                                    </ButtonGroup>
                                }
                            </div>
                        );
                    })}
                </TabPanel>
                <React.Fragment key={'right'}>
                    <Badge color="error" anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }} className='floatbadge' badgeContent={totalCount} max={5}>
                        <Fab color="success" className='floatCart'  onClick={toggleDrawer('right', true)}  aria-label="add">
                            <ShoppingCartIcon />
                        </Fab>
                    </Badge>
                    <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        <Box
                            sx={{ width: 400 }}
                            role="presentation"
                            // onClick={toggleDrawer('right', false)}
                            // onKeyDown={toggleDrawer('right', false)}
                            >
                            <div className='cartDetails'>
                                <Box sx={{ boxShadow: 1 }}>
                                    <h4 className='headercart'>Cart</h4>
                                </Box>
                                <div  className="innerCartDiv">
                                <h3 className='itemdetailsheader'>Items</h3>

                                        {menudata.map((value, index) => {
                                            return (                  
                                                value.count >0 && 
                                                <div className='individualItem'>
                                                    <p className="innercardHeader">{value.title} - ${value.cost} </p>
                                                    <ButtonGroup className='buttonGroup' size="small" color='success' aria-label="small outlined button group">
                                                            <Button onClick={() => handleDecrement(index)}>-</Button>
                                                                <Button>{menudata[index].count}</Button>
                                                            <Button onClick={() => handleIncrement(index)}>+</Button>
                                                        </ButtonGroup>
                                                        <div>
                                                        <ButtonGroup className='buttonGroup' size="small" color='success' aria-label="small outlined button group">
                                                            <Button variant="text">edit</Button>
                                                            <Button color='error' variant="text">remove</Button>
                                                        </ButtonGroup>
                                                        </div>
                                                        

                                                </div>
                                            );
                                        })}
                                        <div>
                                            <span className='slabel'>Sub total</span>
                                            <span className='stotal'>{totalCost}</span>
                                        </div>
                                </div>
                            </div>
                            
                            {/* <Link to={} className='footerbutton'color='success'>Proceed to checkout</Link> */}
                        </Box>
                    </Drawer>
                </React.Fragment>
            </Box>
        </div>
    );
};


export const RestaurantMenuContainer = (RestaurantMenu);
