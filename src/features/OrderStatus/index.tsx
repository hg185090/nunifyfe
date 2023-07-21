import React from 'react'
import Slider from '../dashboard/slider'
import Card from '@mui/material/Card/Card'
import { ListItem, ListItemText, Typography, styled } from '@mui/material'
import { getStatus } from './helperFunctions'
import List from '@mui/material/List';



const OrderData = {
    status: 'preparing',
    time: 5,
    OrderDetails: [1, 2, 3, 4, 5]
}

const MainContainer = styled('div')({
    "color": "white",
    "background": "#282c34",
    "display": "flex",
    "height": "100%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
})

const AddsContainer = styled('div')({
    "background": "blue",
    "height": "50vh",
    "width": "100%"
})

const CardsContainer = styled('div')({
    "height": "50vh",
    "width": "100%",
    "display":"flex",
    "justifyContent":"center"
    // "alignItems" : "center",
})

const CustomCard = styled(Card)({
    "display": "flex",
    "margin": "5px",
    "width":"25%",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center",
    "background": "white"
})

const HorizontalLine = styled('div')({
    "color": "black",
    "backgroundColor": "grey",
    "height": 0.5,
    "width": '90%',
})

export default function Orderstatus() {
    return (
        <MainContainer>
            <AddsContainer>
                Ads
            </AddsContainer>
            <CardsContainer>
                <CustomCard>
                    <Typography>Estimated time</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>9 minutes</Typography>
                    <Typography>{getStatus(OrderData.status)}</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Order Details</Typography>
                    <HorizontalLine />
                    <Typography>Restaurant Name</Typography>
                    <Typography>Order #order_id</Typography>
                    <HorizontalLine />
                    <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {OrderData.OrderDetails.map((data, index) => {
                            return (
                                    <ListItemText primary={`${1} X  Item ${data}`} />
                            )
                        })}
                    </List>
                </CustomCard>
                <CustomCard>
                    <Typography>Estimated time</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>9 minutes</Typography>
                    <Typography>{getStatus(OrderData.status)}</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Order Details</Typography>
                    <HorizontalLine />
                    <Typography>Restaurant Name</Typography>
                    <Typography>Order #order_id</Typography>
                    <HorizontalLine />
                    <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {OrderData.OrderDetails.map((data, index) => {
                            return (
                                    <ListItemText primary={`${1} X Item ${data}`} />
                            )
                        })}
                    </List>
                </CustomCard>
            </CardsContainer>
        </MainContainer>
    )
}
