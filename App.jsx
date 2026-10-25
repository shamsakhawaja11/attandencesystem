import { useEffect } from "react";
import { initializeDatabase } from './src/database';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './src/screenss/LoginScreen'
import DashboardScreen from './src/screenss/DashboardScreen';
export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}