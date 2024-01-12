import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { Register, Login } from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import ReceiptGroup from '../screens/ReceiptGroup';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="ReceiptGroup"
        component={ReceiptGroup}
        options={{title: t('navigation.receiptgroup')}}
      />
    </Stack.Navigator>
  );
};
