import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card, IconButton, Text} from 'react-native-paper';
import {axios} from '@app/lib/axios';
import PaperView from '@app/components/PaperView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '@app/components/styles';
import {customLightThemeColors} from '@app/theme';
import {LABEL} from '@app/language';
import CardButton from '@app/components/CardButton';
import {ACTIONS} from '@app/context/reducer';
import {useStore} from '@app/context/StoreContext';
import {useAuth0} from 'react-native-auth0';
import CardSwitcher from '@app/components/CardSwitcher';
import {formatInitials} from '@app/features/settings/utils/formatInitials';
import {PreferencesContext} from '@app/context/PreferencesContext';

export const SettingsScreen = () => {
  const {toggleTheme, isThemeDark} = useContext(PreferencesContext);

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
            left={props => (
              <Avatar.Text
                {...props}
                size={48}
                label={formatInitials(userBE.name)}
              />
            )}
            right={props => <IconButton {...props} icon="chevron-right" />}
          />
        </Card>

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.APP}
        </Text>
        <CardSwitcher
          label={LABEL.DARK_MODE}
          onToggleSwitch={toggleTheme}
          value={isThemeDark}
        />

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.ACCOUNT}
        </Text>
        <CardButton label={LABEL.LOG_OUT} onPress={logOut} />
        <CardButton
          label={LABEL.DELETE_ACCOUNT}
          onPress={() => {}}
          isRedText={true}
          isDisabled={true}
        />

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.DEVELOPER}
        </Text>
        <CardButton label={LABEL.TEST_AXIOS_HEALTH} onPress={testAxiosHealth} />

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
    color: customLightThemeColors.grey[800],
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
  appVersion: {
    alignSelf: 'center',
    fontSize: 12,
    color: customLightThemeColors.grey[600],
  },
});
