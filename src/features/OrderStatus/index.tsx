import React from 'react'
import Slider from '../dashboard/slider'
import Card from '@mui/material/Card/Card'
import { Typography, styled } from '@mui/material'

const MainContainer = styled('div')({
    "color": "white",
    "background": "#282c34",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
})

const CustomCard = styled(Card)({
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "background": "white",
    "width": "80%",
    "height": "300px"
})

export default function Orderstatus() {
    return (
        <MainContainer>
            <h1>Ads</h1>
            <CustomCard>
                <Typography>Estimated arrival</Typography>
                <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>9 minutes</Typography>
                <Typography> KFC is preparing your order </Typography>
                <Typography> Your order's on track to be delivered on time.</Typography>
            </CustomCard>
            <span></span>
            <span></span>
            <span></span>
            <CustomCard>
                <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Delivery</Typography>
                <Typography> KFC is preparing your order </Typography>
                <Typography> Your order's on track to be delivered on time.</Typography>
            </CustomCard>

        </MainContainer>
    )
}
