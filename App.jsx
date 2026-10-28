import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";


//flatList   image upload


export default function App() {
  const [plan, setPlan] = useState('Basic')
  const [duration, setDuration] = useState('6M');
  const [payment, setPayment] = useState('Cash')
  return (
    <View>

      <View>
        <Text>Select Membership Plan</Text>
        <RadioButton value="Basic" status={plan === 'Basic' ? 'checked' : 'unchecked'} onPress={() => setPlan('Basic')} />
        <RadioButton value="Standard" status={plan === 'Standard' ? 'checked' : 'unchecked'} onPress={() => setPlan('Standard')} />
        <RadioButton value="Premium" status={plan === 'Premium' ? 'checked' : 'unchecked'} onPress={() => setPlan('Premium')} />
      </View>

      <View>
        <Text>Select Duration</Text>
        <RadioButton
          value="1Month(No Discount)"
          status={duration === '1M' ? 'checked' : 'unchecked'}
          onPress={() => setDuration('1M')}
        />
        <RadioButton
          value="3Month(No Discount)"
          status={duration === '3M' ? 'checked' : 'unchecked'}
          onPress={() => setDuration('3M')}
        />
        <RadioButton
          value="6Month(No Discount)"
          status={duration === '6M' ? 'checked' : 'unchecked'}
          onPress={() => setDuration('6M')}
        />

        <RadioButton
          value="1Month(No Discount)"
          status={duration === '12M' ? 'checked' : 'unchecked'}
          onPress={() => setDuration('12M')}
        />
      </View>

      <View>
        <Text>Select Payment Method</Text>
        <RadioButton
          value="Cash"
          status={payment==='Cash'?'checked':'unchecked'}
          onPress={()=>setPayment('Cash')}
        />
        <RadioButton
          value="Card"
          status={payment==='Card'}
        />
      </View>

    </View>
  );
}