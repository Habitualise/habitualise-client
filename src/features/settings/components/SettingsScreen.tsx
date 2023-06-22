import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton, Text} from 'react-native-paper';
import {axios} from '@app/lib/axios';
import PaperView from '@app/components/PaperView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '@app/components/styles';
import {themeColors} from '@app/theme';
import {LABEL} from '@app/language';
import CardButton from '@app/components/CardButton';
import {ACTIONS} from '@app/context/reducer';
import {useStore} from '@app/context/StoreContext';
import {useAuth0} from 'react-native-auth0';
import CardSwitcher from '@app/components/CardSwitcher';

export const SettingsScreen = () => {
  const {clearSession, user: userAuth0} = useAuth0();
  const {dispatch, state} = useStore();
  const {userBE} = state;

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
      console.log('=== response from SettingsScreen.tsx [19] ===', response);
    } catch (error) {
      console.log('=== error from SettingsScreen.tsx [21] ===', error);
    }
  };

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <PaperView style={[commonStyles.paperView, commonStyles.paddedContainer]}>
        <Text style={styles.title}>{LABEL.SETTINGS}</Text>

        <Card style={styles.profileCard} mode="contained">
          <Card.Title
            title={userBE.name}
            subtitle={userAuth0.email}
            left={props => <Avatar.Text {...props} size={48} label="TY" />}
            right={props => <IconButton {...props} icon="chevron-right" />}
          />
        </Card>

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.APP}
        </Text>
        <CardSwitcher
          label={LABEL.DARK_MODE}
          onToggleSwitch={toggleSwitch}
          value={isDarkMode}
        />

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.ACCOUNT}
        </Text>
        <CardButton label={LABEL.LOG_OUT} onPress={logOut} />
        <CardButton
          label={LABEL.DELETE_ACCOUNT}
          onPress={() => {}}
          isRedText={true}
        />

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.DEVELOPER}
        </Text>
        <View style={styles.borderContainer}>
          <Button onPress={testAxiosHealth} title={LABEL.TEST_AXIOS_HEALTH} />
        </View>

        <Text style={styles.appVersion}>{LABEL.APP_VERSION}</Text>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLabel: {
    marginTop: 15,
    marginBottom: 7,
    marginLeft: 10,
    color: themeColors.grey[800],
    fontWeight: '400',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  profileCard: {
    marginBottom: 10,
  },
  redText: {
    color: themeColors.red[500],
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  borderContainer: {
    padding: 10,
    borderColor: themeColors.grey[400],
    borderWidth: 0.5,
    marginBottom: 10,
    borderRadius: 5,
  },
  appVersion: {
    alignSelf: 'center',
    fontSize: 12,
    color: themeColors.grey[600],
  },
  switcherCard: {
    marginBottom: 10,
  },
  switcherText: {
    fontWeight: '500',
  },
});
