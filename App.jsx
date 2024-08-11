import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalScreen from './screens/PersonalScreen';
import ProfessionalScreen from './screens/ProfessionalScreen';
import CompanyScreen from './screens/CompanyScreen';
import FeedDetailScreen from './screens/FeedDetailScreen'; // Import the FeedDetailScreen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Personal"
          component={PersonalScreen}
          options={{headerShown: false}} // Hide header for Personal screen
        />
        <Stack.Screen
          name="Professional"
          component={ProfessionalScreen}
          options={{headerShown: false}} // Hide header for Professional screen
        />
        <Stack.Screen
          name="Company"
          component={CompanyScreen}
          options={{headerShown: false}} // Hide header for Company screen
        />
        <Stack.Screen
          name="FeedDetail"
          component={FeedDetailScreen}
          options={{title: 'Feed Detail'}} // Show header for FeedDetail screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
