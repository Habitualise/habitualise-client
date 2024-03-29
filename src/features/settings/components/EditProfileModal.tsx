import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LABEL} from '@app/language';
import {ACTIONS, DispatchParams, useStore} from '@app/context/StoreContext';
import {ContainerLabel} from '@app/components/ContainerLabel';
import {useCustomTheme} from '@app/theme/useCustomTheme';
import {commonStyles} from '@app/components/styles';

interface EditProfileModalProps {
  route: any;
  navigation: any;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  route,
  navigation,
}) => {
  const theme = useCustomTheme();

  const [displayName, setDisplayName] = useState(route.params?.displayName);
  const [email] = useState(route.params?.email); // TODO: add edit email later
  const [displayNameError, setDisplayNameError] = useState('');

  const {dispatch} = useStore();

  const validateForm = useCallback(() => {
    let isValid = true;

    if (!displayName) {
      setDisplayNameError(LABEL.DISPLAY_NAME_REQUIRED);
      isValid = false;
    } else {
      setDisplayNameError('');
    }

    return isValid;
  }, [displayName]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleUpdateProfile = async () => {
    if (!validateForm()) {
      return;
    }

    if (displayName !== route.params?.displayName) {
      try {
        // await axios.patch('/update-profile', {displayName});
      } catch (error) {
        console.error(error);
      }
    }

    dispatch({
      type: ACTIONS.SET_USER_DISPLAY_NAME,
      payload: displayName,
    } as DispatchParams);

    navigation.pop();
  };

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomColor: theme.colors.grey[400],
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    textInput: {
      marginBottom: 16,
      fontSize: 16,
    },
    discard: {
      fontSize: 16,
      color: theme.colors.red[600],
    },
    update: {
      fontSize: 16,
      color: theme.colors.primary,
    },
    error: {
      color: theme.colors.red[600],
      marginBottom: 16,
    },
  });

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.discard}>{LABEL.DISCARD}</Text>
        </TouchableOpacity>
        <Text variant="titleMedium">{LABEL.EDIT_PROFILE}</Text>
        <TouchableOpacity onPress={handleUpdateProfile}>
          <Text style={styles.update}>{LABEL.UPDATE}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ContainerLabel text={LABEL.DISPLAY_NAME} />
        <TextInput
          style={styles.textInput}
          onChangeText={setDisplayName}
          value={displayName}
        />
        {displayNameError ? (
          <Text style={styles.error}>{displayNameError}</Text>
        ) : null}

        <ContainerLabel text={LABEL.EMAIL} />
        <TextInput style={styles.textInput} value={email} disabled={true} />
      </View>
    </SafeAreaView>
  );
};
