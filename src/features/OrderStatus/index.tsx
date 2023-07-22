import Card from '@mui/material/Card/Card'
import { ListItem, ListItemText, Stack, Step, StepConnector, StepIconProps, StepLabel, Stepper, Typography, stepConnectorClasses, styled } from '@mui/material'
import { getEstimatedTime, getStatus } from './helperFunctions'
import List from '@mui/material/List';
import ReactPlayer from 'react-player'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const dummyOrderDetails1 = {
    orderID: "123Arwrwy67BC",
    orderTime: "2023-07-21T14:45:30",
    companyName: "Dominos",
    orderItems: [
        {
            itemName: "Burger",
            price: 12.20,
            quantity: 2
        },
        {
            itemName: "Coke",
            price: 2.50,
            quantity: 1
        },
    ],
    status: 'preparing',
    time: 15,
}

const dummyOrderDetails2 = {
    orderID: "3143r38wrrwhABC",
    orderTime: "2023-07-21T14:45:30",
    companyName: "KFC",
    orderItems: [
        {
            itemName: "Caesar's Legion Salad",
            price: 5.75,
            quantity: 2
        },
        {
            itemName: "Cheeze Broccoli Soup",
            price: 6.25,
            quantity: 3
        },
    ]
}


const OrdersData = [
    {
        status: 'placed',
        time: 15,
        OrderDetails: dummyOrderDetails2
    },
    {
        status: 'preparing',
        time: 5,
        OrderDetails: dummyOrderDetails1
    }
];



const MainContainer = styled('div')({
    "color": "white",
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
    "margin": "17px 12px",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center",
    "background": "white",
    "boxShadow": "0 0 50px #ccc",
    "borderRadius": "22px"
})

const HorizontalLine = styled('div')({
    "color": "black",
    "backgroundColor": "grey",
    "height": 0.5,
    "width": '90%',
})


const getPrice = (itemsList: any) => {
    var sum = 0;
    itemsList.map((val: any) => {
        sum += val.price * val.quantity;
    })
    return sum;
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

const steps = ['Placed', 'Accepted', 'Preparing', 'Ready for Pickup'];

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <FastfoodIcon />,
        2: <CheckCircleIcon />,
        3: <SoupKitchenIcon />,
        4: <LocalPostOfficeIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

export default function Orderstatus() {
    return (
        <MainContainer>
            <AddsContainer>
                <ReactPlayer height="100%" width="100%" playing={true} muted={true} loop={true} url='https://www.youtube.com/watch?v=KF-EJw0wFoc' />
            </AddsContainer>
            <CardsContainer>
                {OrdersData.map((data, index) => {
                    return (
                        <CustomCard>
                            {/* <Typography>Estimated time</Typography> */}
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Estimated time: <span> {data.time} Minutes</span></Typography>
                            <Stack sx={{ width: '90%' }} spacing={4}>
                                <Stepper alternativeLabel activeStep={getStatus(data.status)} connector={<ColorlibConnector />}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Stack>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold',color:'green' }}>Order Details</Typography>
                            <HorizontalLine />
                            <Typography style={{fontWeight: 'bold', fontSize: '25px'}}>{data.OrderDetails.companyName}</Typography>
                            <Typography>Order #{data.OrderDetails.orderID}</Typography>
                            <HorizontalLine />
                            <List sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper',textAlign:'left'}}>
                                {data.OrderDetails.orderItems.map((data, index) => {
                                    return (
                                        <ListItemText primary={`${data.quantity} X  Item ${data.itemName}`} />
                                    )
                                })}
                            </List>
                            <Typography style={{fontWeight: 'bold', fontSize: '30px'}}>Total  ${getPrice(data.OrderDetails.orderItems)}</Typography>
                        </CustomCard>
                    );
                })}
            </CardsContainer>
        </MainContainer>
    )
}
 