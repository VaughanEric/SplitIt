import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Pro, MyReceipts, Scanner, ReceiptDetails} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import ReceiptGroup from '../screens/ReceiptGroup';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Receipts"
        component={MyReceipts}
        options={{title: t('navigation.receipts')}}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{title: t('navigation.scanner')}}
      />
      <Stack.Screen
        name="ReceiptGroup"
        component={ReceiptGroup}
        options={{title: t('navigation.receiptgroup')}}
      />
      <Stack.Screen
        name="ReceiptDetails"
        component={ReceiptDetails}
        options={{title: t('navigation.receiptdetails')}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
