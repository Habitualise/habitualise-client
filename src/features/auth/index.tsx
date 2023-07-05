import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAuth0} from 'react-native-auth0';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {commonStyles} from '@app/components/styles';
import {LABEL} from '@app/language';
import PaperView from '@app/components/PaperView';
import {useCustomTheme} from '@app/theme/useCustomTheme';

export const WelcomeScreen = () => {
  const theme = useCustomTheme();

  const {authorize} = useAuth0();
  const logIn = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const styles = StyleSheet.create({
    logo: {
      marginBottom: 50,
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    header: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: '700',
      color: theme.colors.primary,
    },
    subHeader: {
      marginBottom: 60,
      lineHeight: 30,
      textAlign: 'center',
      color: theme.colors.primary,
    },
    signUpButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 120,
    },
    pressableView: {
      marginBottom: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    signUpButtonText: {
      color: theme.colors.grey[50],
      fontWeight: '500',
    },
  });

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <PaperView style={commonStyles.container}>
        <Image
          source={require('@app/assets/googleLogo.png')}
          style={styles.logo}
        />
        <Text variant="displaySmall" style={styles.header}>
          {LABEL.WELCOME_HEADER}
        </Text>
        <Text variant="titleLarge" style={styles.subHeader}>
          {LABEL.WELCOME_SUBHEADER}
        </Text>
        <View style={styles.pressableView}>
          <Pressable
            onPress={logIn}
            style={({pressed}) => [
              {
                backgroundColor: pressed
                  ? theme.colors.primaryLighter
                  : theme.colors.primary,
              },
              styles.signUpButtonContainer,
            ]}
            android_ripple={{color: theme.colors.grey[200]}}>
            <Text variant="bodyLarge" style={styles.signUpButtonText}>
              {LABEL.SIGN_UP}
            </Text>
          </Pressable>
        </View>
        <Button
          onPress={logIn}
          contentStyle={{flexDirection: 'row-reverse'}}
          icon={props => (
            <MaterialIcons name="arrow-forward" color={props.color} size={20} />
          )}>
          {LABEL.ALREADY_HAVE_ACCOUNT}
        </Button>
      </PaperView>
    </SafeAreaView>
  );
};
