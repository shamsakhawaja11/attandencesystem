import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function App() {

  const [movieType, setMovieType] = useState('2D')
  const [seatClass, setSeatClass] = useState('Standard')
  const [ticketSize, setTicketSize] = useState('1')
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0)

  const calculateTotal = () => {
    let unit = 0;
    if (movieType === '2D') {
      if (seatClass === 'Standard') {
        unit = 400
      } else if (seatClass === 'Premium') {
        unit = 600
      } else {
        unit = 800;
      }
    } else {
      if (seatClass === 'Standard') {
        unit = 600;
      } else if (seatClass === 'Premium') {
        unit = 800
      } else {
        unit = 1000
      }
    }
    setPrice(unit)
    setTotal(unit*parseInt(ticketSize));
  }

  return (
    <View>

      <Text>Movie Ticket</Text>
      <View style={{ height: '1%', width: '85%' }}></View>
      <View>
        <Text>Select Movie Type</Text>
        <RadioButton
          value="2D"
          status={movieType === '2D' ? 'checked' : 'unchecked'}
          onPress={() => setMovieType('2D')}
        />
        <Text>2D</Text>

        <RadioButton
          value="3D"
          status={movieType === '3D' ? 'checked' : 'unchecked'}
          onPress={() => setMovieType('3D')}
        />
        <Text>3D</Text>
      </View>

      <View>
        <Text>Select Seating Class</Text>

        <View>
          <RadioButton
            value='Standard'
            status={seatClass === 'standard' ? 'checked' : 'unchecked'}
            onPress={() => setSeatClass('standard')}
          />
          <Text>Standard (Rs: 400)</Text>

          <RadioButton
            value='Premium'
            status={seatClass === 'Premium' ? 'checked' : 'unchecked'}
            onPress={() => setSeatClass('Premium')}
          />
          <Text>Premium (Rs: 600)</Text>

          <RadioButton
            value='Vip'
            status={seatClass === 'Vip' ? 'checked' : 'unchecked'}
            onPress={() => setSeatClass('Vip')}
          />
          <Text>VIP (Rs: 800)</Text>
        </View>

        <View>
          <Text>Select Number of Tockets</Text>
          <RadioButton
            value="1"
            status={ticketSize === '1' ? 'checked' : 'unchecked'}
            onPress={() => setTicketSize('1')}
          />
           <RadioButton
            value="2"
            status={ticketSize === '2' ? 'checked' : 'unchecked'}
            onPress={() => setTicketSize('2')}
          />
           <RadioButton
            value="3"
            status={ticketSize === '3' ? 'checked' : 'unchecked'}
            onPress={() => setTicketSize('3')}
          />
           <RadioButton
            value="4"
            status={ticketSize === '4' ? 'checked' : 'unchecked'}
            onPress={() => setTicketSize('4')}
          />
        </View>

        <Pressable onPress={calculateTotal}>
          <Text>Calculate Total</Text>
        </Pressable>

        <View>
          <Text>Ticket Summary</Text>
          <Text>Movie Type :{movieType}</Text>
          <Text>Seating Class :{seatClass}</Text>
          <Text>Number of Tickets: {ticketSize}</Text>
          <Text>Price per Ticket: {price}</Text>
          <View style={{ height: '1%', width: '85%', backgroundColor: 'black' }}></View>
          <Text>Total Amount :  Rs.{total}</Text>
        </View>
      </View>

    </View>
  );
}