import Card from '@mui/material/Card/Card'
import { ListItem, ListItemText, Typography, styled } from '@mui/material'
import { getEstimatedTime, getStatus } from './helperFunctions'
import List from '@mui/material/List';

const dummyOrderDetails1 = {
    orderID: "123Arwrwy67BC",
    orderTime: "2023-07-21T14:45:30",
    companyName: "KFC",
    orderItems: [
        {
            itemName: "Burger",
            quantity: 2
        },
        {
            itemName: "Coke",
            quantity: 1
        },
    ]
}

const dummyOrderDetails2 = {
    orderID: "3143r38wrrwhABC",
    orderTime: "2023-07-21T14:45:30",
    companyName: "Dominos",
    orderItems: [
        {
            itemName: "Chicken BarBeque Pizza",
            quantity: 2
        },
        {
            itemName: "Chesse Pizza",
            quantity: 1
        },
    ]
}


const OrdersData = [
    {
        status: 'preparing',
        time: 5,
        OrderDetails: dummyOrderDetails1
    },
    {
        status: 'placed',
        time: 10,
        OrderDetails: dummyOrderDetails2
    }
];


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
    "display": "flex",
    "justifyContent": "center"
    // "alignItems" : "center",
})

const CustomCard = styled(Card)({
    "display": "flex",
    "margin": "5px",
    "width": "25%",
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
                <iframe
                    width="100%"
                    height="100%"
                    src={"https://www.youtube.com/watch?v=xl32pXkAQAI"}
                    title="Youtube Player"
                    allowFullScreen
                />
            </AddsContainer>
            <CardsContainer>
                {OrdersData.map((data, index) => {
                    return (
                        <CustomCard>
                            <Typography>Estimated time</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{getEstimatedTime(data.time, data.OrderDetails.orderTime)} Minutes</Typography>
                            <Typography>{getStatus(data.status)}</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Order Details</Typography>
                            <HorizontalLine />
                            <Typography>{data.OrderDetails.companyName}</Typography>
                            <Typography>Order #{data.OrderDetails.orderID}</Typography>
                            <HorizontalLine />
                            <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {data.OrderDetails.orderItems.map((data, index) => {
                                    return (
                                        <ListItemText primary={`${data.quantity} X  Item ${data.itemName}`} />
                                    )
                                })}
                            </List>
                        </CustomCard>
                    );
                })}
            </CardsContainer>
        </MainContainer>
    )
}
