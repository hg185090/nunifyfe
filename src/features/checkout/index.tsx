import Card from "@mui/material/Card/Card";
import TextField from "@mui/material/TextField/TextField";
import {
  Button,
  Typography,
  styled,
} from "@mui/material";
import "../../App.css";
import Orderstatus from "../OrderStatus";

const dummyOrderDetails = {
  orderID: "123Arwrwy67BC",
  restaurantName: "KFC",
  restaurantAddress: "36 street, GA-30308",
  orderTime: Date.now(),
  pickupTime: Date.now() + 20 * 60 * 1000,
};

const MainContainer = styled("div")({
  color: "white",
  background: "white",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "green",
});

const cardsWrapperStyle = {
  height: "100vh",
  width: "100%",
  overFlow: "auto",
};

const CardsContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderBlockColor: "green",
  backgroundColor: "white",
});

const CustomCard = styled(Card)({
  height: "50%",
  display: "flex",
  margin: "10px",
  width: "50%",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderColor: "1px solid",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

const HorizontalLine = styled("div")({
  color: "black",
  border: "2px sloid",
  backgroundColor: "green",
  height: 0.5,
  width: "90%",
});

export default function CheckOut() {
  return (
    <MainContainer>
      <div style={cardsWrapperStyle}>
        <CardsContainer>
          <CustomCard>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
                color: "green",
                fontPalette: "light"
              }}
            >
              Apply Coupon
            </Typography>
            <HorizontalLine />
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'400px'}}>
              <TextField
                id="outlined-basic"
                label="Please enter your coupon code"
                variant="outlined"
                sx={{ width: "300px" }}
                size="small"
                margin="dense"
              />
              <Button variant="contained" sx={{height:'40%'}} color="success">Apply</Button>
            </div>
          </CustomCard>
          <CustomCard>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
                color: "green",
              }}
            >
              Order Summary
            </Typography>
            <HorizontalLine />
            <Typography sx={{ fontSize: "15px", margin: "0.1px" }}>
              OrderId: {dummyOrderDetails.orderID}
            </Typography>
            <Typography sx={{ fontSize: "15px", margin: "0.1px" }}>
              location: {dummyOrderDetails.restaurantAddress}
            </Typography>
            <Typography sx={{ fontSize: "15px", margin: "0.1px" }}>
              orderTime: {dummyOrderDetails.orderTime}
            </Typography>
            <Typography sx={{ fontSize: "15px", margin: "0.1px" }}>
              pickup: {dummyOrderDetails.pickupTime}
            </Typography>
            
          </CustomCard>
          <CustomCard>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
            >
              Customer Info
            </Typography>
            <HorizontalLine />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="Special Instructions"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
          </CustomCard>
          <CustomCard>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
            >
              Payment
            </Typography>
            <HorizontalLine />
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              sx={{ width: "400px" }}
              size="small"
              margin="dense"
            />
            <Button variant="contained" color="secondary" onClick={Orderstatus}>Submit</Button>
          </CustomCard>
        </CardsContainer>
      </div>
    </MainContainer>
  );
}
