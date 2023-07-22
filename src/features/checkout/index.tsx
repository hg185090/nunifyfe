import Card from '@mui/material/Card/Card';
import TextField from '@mui/material/TextField/TextField';
import { Button, Typography, styled } from '@mui/material';
import '../../App.css';
import Orderstatus from '../OrderStatus';

const dummyOrderDetails = {
  orderID: '123Arwrwy67BC',
  restaurantName: 'KFC',
  restaurantAddress: '36 street, GA-30308',
  orderTime: Date.now(),
  pickupTime: Date.now() + 20 * 60 * 1000,
};

const MainContainer = styled('div')({
  color: 'white',
  background: 'white',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const cardsWrapperStyle = {
  height: '100vh',
  width: '100%',
  overFlow: 'auto',
};

const CardsContainer = styled('div')({
  width: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  backgroundColor: 'white',
  margin: '0 auto',
});

const CustomCard = styled(Card)({
  height: '50%',
  display: 'flex',
  margin: '10px',
  width: '50%',
  flexDirection: 'column',
  backgroundColor: 'white',
  border: 'none',
  // borderColor: "1px solid",
  // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

const HorizontalLine = styled('div')({
  color: 'grey',
  marginTop: '5px',
  border: '0.1px solid',
  width: '90%',
});

export default function CheckOut() {
  return (
    <MainContainer>
      <div
        style={{
          margin: '0 auto',
          width: '500px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'left',
          borderBottom: '0.1px solid black',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
          }}
        >
          Apply Coupon
        </Typography>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '400px',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Please enter your coupon code"
            variant="outlined"
            sx={{ width: '300px' }}
            size="small"
            margin="dense"
          />
          <Button variant="contained" sx={{ height: '40%' }} color="success">
            Apply
          </Button>
        </div>
      </div>
      <div
        style={{
          margin: '0 auto',
          width: '500px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'left',
          borderBottom: '0.1px solid black',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
          }}
        >
          Order Summary
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            fontSize: '15px',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>2x</span>{' '}
          <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
            {' '}
            Caesar's Legion Salad
          </span>
          <span
            style={{ fontWeight: 'bold', position: 'relative', left: '210px' }}
          >
            $5.75
          </span>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            fontSize: '15px',
            color: 'grey',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <ul>
            <li>Add general TSO's</li>
            <li>Add Ranch Rings</li>
            <li>Add Onions Rings</li>
          </ul>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            fontSize: '15px',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>3x</span>{' '}
          <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
            {' '}
            Cheeze Broccoli Soup
          </span>
          <span
            style={{ fontWeight: 'bold', position: 'relative', left: '210px' }}
          >
            $6.25
          </span>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            fontSize: '15px',
            color: 'grey',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <ul>
            <li>Add general TSO's</li>
            <li>Add Ranch Rings</li>
            <li>Add Onions Rings</li>
          </ul>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            fontSize: '15px',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
            {' '}
            Subtotal
          </span>
          <span
            style={{ fontWeight: 'bold', position: 'relative', left: '325px' }}
          >
            $30.00
          </span>
        </Typography>
      </div>
      <div
        style={{
          margin: '0 auto',
          width: '500px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'left',
          borderBottom: '0.1px solid black',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
          }}
        >
          Customer Information
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Special Instructions"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
      </div>

      <div
        style={{
          margin: '0 auto',
          width: '500px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'left',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            margin: '10px',
            color: '#000',
            alignItems: 'left',
          }}
        >
          Payment Information
        </Typography>

        <TextField
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="CVV"
          variant="outlined"
          sx={{ width: '400px' }}
          size="small"
          margin="dense"
        />
      </div>

      <Button
        variant="contained"
        color="success"
        sx={{ marginBottom: '10px' }}
        onClick={Orderstatus}
      >
        Submit
      </Button>
    </MainContainer>
  );
}
