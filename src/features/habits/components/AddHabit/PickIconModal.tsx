import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LABEL} from '@app/language';
import {themeColors} from '@app/theme';

const icons = ['run', 'water', 'fire', 'music', 'soccer'];

interface PickIconModalProps {
  navigation: any;
}

export const PickIconModal: React.FC<PickIconModalProps> = ({navigation}) => {
  const [selectedIcon, setSelectedIcon] = useState('');

  const onIconPress = (icon: string) => {
    setSelectedIcon(icon);
  };

  const onSelectIcon = () => {
    navigation.navigate(LABEL.HABITS_STACK, {
      screen: LABEL.ADD_HABIT_MODAL,
      params: {iconName: selectedIcon},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <MaterialIcons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text variant="titleMedium">Pick Icon</Text>
        <TouchableOpacity onPress={onSelectIcon}>
          <Text style={styles.select}>Select</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onIconPress(icon)}
            style={[
              styles.iconButton,
              selectedIcon === icon && styles.iconButtonSelected,
            ]}>
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={selectedIcon === icon ? 'white' : 'black'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  select: {
    fontSize: 16,
    color: themeColors.blue[600],
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iconButton: {
    padding: 8,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    margin: 8,
  },
  iconButtonSelected: {
    backgroundColor: 'blue',
  },
});
