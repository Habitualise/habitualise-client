import React, {useContext} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton, Text} from 'react-native-paper';
import {axios} from '@app/lib/axios';
import PaperView from '@app/components/PaperView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '@app/components/styles';
import {LABEL} from '@app/language';
import CardButton from '@app/components/CardButton';
import {ACTIONS, DispatchParams} from '@app/context/reducer';
import {useStore} from '@app/context/StoreContext';
import {useAuth0} from 'react-native-auth0';
import CardSwitcher from '@app/components/CardSwitcher';
import {formatInitials} from '@app/features/settings/utils/formatInitials';
import {PreferencesContext} from '@app/context/PreferencesContext';
import Spinner from '@app/components/Spinner';
import {EditProfileScreenParams} from '@app/features/settings/types';
import {ContainerLabel} from '@app/components/ContainerLabel';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface SettingsScreenProps {
  navigation: any;
}

export const SettingsScreen = ({navigation}: SettingsScreenProps) => {
  const {toggleTheme, isThemeDark} = useContext(PreferencesContext);
  const theme = useCustomTheme();

  const {clearSession, user: userAuth0} = useAuth0();
  const {dispatch, state} = useStore();
  const {userBE, loading} = state;

  const logOut = async () => {
    try {
      await clearSession();
      dispatch({type: ACTIONS.HANDLE_LOGOUT} as DispatchParams);
    } catch (e) {
      console.log(e);
    }
  };

  const onProfileClick = () => {
    navigation.navigate(LABEL.SETTINGS_STACK, {
      screen: LABEL.EDIT_PROFILE_MODAL,
      params: {
        displayName: userBE.name,
        email: userAuth0.email,
      } as EditProfileScreenParams,
    });
  };

  const testAxiosHealth = async () => {
    try {
      const response = await axios.get('/api/health');
      console.log('=== response from SettingsScreen.tsx [19] ===', response);
    } catch (error) {
      console.log('=== error from SettingsScreen.tsx [21] ===', error);
    }
  };

  const styles = StyleSheet.create({
    containerLabel: {
      marginTop: 15,
      marginBottom: 7,
      marginLeft: 10,
      color: theme.colors.grey[800],
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
      borderRadius: 12,
      overflow: 'hidden',
    },
    appVersion: {
      alignSelf: 'center',
      fontSize: 12,
      color: theme.colors.grey[600],
    },
    pressableContainerPressed: {
      backgroundColor: theme.colors.surfaceVariantPressed,
    },
  });

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <PaperView style={[commonStyles.paperView, commonStyles.paddedContainer]}>
        <Text style={styles.title}>{LABEL.SETTINGS}</Text>

        <View style={styles.profileCard}>
          <Pressable
            onPress={onProfileClick}
            android_ripple={{color: theme.colors.grey[400]}}>
            {({pressed}) => (
              <Card
                style={[pressed && styles.pressableContainerPressed]}
                mode="contained">
                {loading ? (
                  <Spinner />
                ) : (
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
                    right={props => (
                      <IconButton {...props} icon="chevron-right" />
                    )}
                  />
                )}
              </Card>
            )}
          </Pressable>
        </View>

        <ContainerLabel text={LABEL.APP} />
        <CardSwitcher
          label={LABEL.DARK_MODE}
          onToggleSwitch={toggleTheme}
          value={isThemeDark}
        />

        <ContainerLabel text={LABEL.ACCOUNT} />
        <CardButton label={LABEL.LOG_OUT} onPress={logOut} />
        <CardButton
          label={LABEL.DELETE_ACCOUNT}
          onPress={() => {}}
          isRedText={true}
          isDisabled={true}
        />

        <ContainerLabel text={LABEL.DEVELOPER} />
        <CardButton label={LABEL.TEST_AXIOS_HEALTH} onPress={testAxiosHealth} />

        <Text style={styles.appVersion}>{LABEL.APP_VERSION}</Text>
      </PaperView>
    </SafeAreaView>
  );
};
