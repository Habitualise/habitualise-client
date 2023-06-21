import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton, Switch, Text} from 'react-native-paper';
import {axios} from '@app/lib/axios';
import PaperView from '@app/components/PaperView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '@app/components/styles';
import {themeColors} from '@app/theme';
import {LABEL} from '@app/language';

export const SettingsScreen = () => {
  // const {clearSession, user} = useAuth0();
  // const {dispatch} = useStore();

  // const logOut = async () => {
  //   try {
  //     await clearSession();
  //     dispatch({type: ACTIONS.HANDLE_LOGOUT});
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
            title={LABEL.NAME}
            subtitle={LABEL.EMAIL_ADDRESS}
            left={props => <Avatar.Text {...props} size={48} label="TY" />}
            right={props => <IconButton {...props} icon="chevron-right" />}
          />
        </Card>

        <Text style={styles.containerLabel} variant="labelMedium">
          {LABEL.APP}
        </Text>
        <Card style={styles.buttonCard} mode="contained">
          <Card.Content>
            <Text style={styles.cardText}>{LABEL.LOG_OUT}</Text>
          </Card.Content>
        </Card>
        <Card style={styles.buttonCard} mode="contained">
          <Card.Content>
            <Text style={[styles.cardText, styles.redText]}>
              {LABEL.DELETE_ACCOUNT}
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.buttonCard} mode="contained">
          <Card.Content>
            <View style={styles.rowContainer}>
              <Text style={styles.cardText}>{LABEL.DARK_MODE}</Text>
              <Switch onValueChange={toggleSwitch} value={isDarkMode} />
            </View>
          </Card.Content>
        </Card>

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
  buttonCard: {
    marginBottom: 10,
  },
  cardText: {
    fontWeight: '500',
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
    fontSize: 10,
  },
});
