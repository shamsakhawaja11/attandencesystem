import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";


//flatList   image upload   Show data in list and table on UI  
//filter map foeach reduce  find etc


export default function App() {
  const [plan, setPlan] = useState(2000)
  const [duration, setDuration] = useState(6);
  const [payment, setPayment] = useState('Cash')
  const [discount, setDiscount] = useState(0)
  const [amount, setAmount] = useState(0)

  const calculateTotal = () => {
    let discount = duration === 1 || duration === 3 ? 0 : 10;
    let discountedPrice = (plan * duration / 100 * discount);
    setDiscount(discountedPrice)
    setAmount(plan * duration - discountedPrice);
  }


  return (
    <View>

      <View>
        <Text>Select Membership Plan</Text>
        <RadioButton value="Basic" status={plan === 2000 ? 'checked' : 'unchecked'} onPress={() => setPlan(2000)} />
        <RadioButton value="Standard" status={plan === 3500 ? 'checked' : 'unchecked'} onPress={() => setPlan(3500)} />
        <RadioButton value="Premium" status={plan === 5000 ? 'checked' : 'unchecked'} onPress={() => setPlan(5000)} />
      </View>

      <View>
        <Text>Select Duration</Text>
        <RadioButton
          value="1Month(No Discount)"
          status={duration === 1 ? 'checked' : 'unchecked'}
          onPress={() => setDuration(1)}
        />
        <RadioButton
          value="3Month(No Discount)"
          status={duration === 3 ? 'checked' : 'unchecked'}
          onPress={() => setDuration(3)}
        />
        <RadioButton
          value="6Month(No Discount)"
          status={duration === 6 ? 'checked' : 'unchecked'}
          onPress={() => setDuration(6)}
        />

        <RadioButton
          value="1Month(No Discount)"
          status={duration === 12 ? 'checked' : 'unchecked'}
          onPress={() => setDuration(12)}
        />
      </View>

      <View>
        <Text>Select Payment Method</Text>
        <RadioButton
          value="Cash"
          status={payment === 'Cash' ? 'checked' : 'unchecked'}
          onPress={() => setPayment('Cash')}
        />
        <RadioButton
          value="Card"
          status={payment === 'Card' ? 'checked' : 'unchecked'}
          onPress={() => setPayment('Card')}
        />
      </View>
      <Pressable onPress={calculateTotal}><Text>Calculate Total</Text></Pressable>

      <View>
        <Text>Membership Summary</Text>
        <Text>Plan: {plan === 2000 ? 'Basic' : plan === 3500 ? 'Standard' : 'Preium'}</Text>
        <Text>Monthly fee: Rs:{plan}</Text>
        <Text>Duration: {duration}</Text>
        <Text>Discount(10%): Rs.{discount}</Text>
        <Text>Payment Method: {payment}</Text>

        <Text>Total Amount : {amount}</Text>
      </View>

    </View>
  );
}