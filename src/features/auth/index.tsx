import React from 'react';
import {Button, Text, View} from 'react-native';

import {useAuth0} from 'react-native-auth0';
import {LABEL} from '@app/language';

export const WelcomeScreen = () => {
  const {authorize} = useAuth0();
  const signIn = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{LABEL.WELCOME_SCREEN}</Text>
      <Button title={LABEL.SIGN_IN} onPress={signIn} />
    </View>
  );
};
