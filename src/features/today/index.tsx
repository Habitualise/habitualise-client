import React from 'react';
import {Button, Text, View} from 'react-native';

import {useAuth0} from 'react-native-auth0';
import {LABEL} from '@app/language';

export const TodayScreen = () => {
  const {clearSession, user} = useAuth0();
  const signOut = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{LABEL.TODAY_SCREEN}</Text>
      <Text>{LABEL.LOGGED_IN_AS(user?.name)}</Text>
      <Button title={LABEL.SIGN_OUT} onPress={signOut} />
    </View>
  );
};
