import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAuth0} from 'react-native-auth0';

import {commonStyles} from '@/components/styles';
import {LABEL} from '@/language';
import {axios} from '@/lib/axios';
import {useStore, ACTIONS} from '@/context/StoreContext';
import PaperView from '@/components/PaperView';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  const {clearSession, user} = useAuth0();
  const {dispatch} = useStore();

  const logOut = async () => {
    try {
      await clearSession();
      dispatch({type: ACTIONS.HANDLE_LOGOUT});
    } catch (e) {
      console.log(e);
    }
  };

  const testAxiosHealth = async () => {
    try {
      const response = await axios.get('/api/health');
      console.log('=== response from TodayScreen.tsx [19] ===', response);
    } catch (error) {
      console.log('=== error from TodayScreen.tsx [21] ===', error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={['top', 'left', 'right']}>
      <PaperView style={commonStyles.container}>
        <Text variant="displaySmall" style={styles.header}>
          {LABEL.SETTINGS_SCREEN}
        </Text>
        <Text variant="labelSmall">{LABEL.LOGGED_IN_AS(user?.name)}</Text>
        <Button mode="contained" onPress={logOut} style={styles.logOutButton}>
          {LABEL.LOG_OUT}
        </Button>
        <Button onPress={testAxiosHealth}>Test Axios Health</Button>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logOutButton: {
    marginTop: 20,
  },
  header: {
    marginBottom: 20,
  },
});
