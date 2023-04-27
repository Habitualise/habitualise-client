import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LABEL} from '@app/language';
import {themeColors} from '@app/theme';
import {IconItem} from './IconItem';

interface PickIconModalProps {
  navigation: any;
}

const glyphMap = MaterialCommunityIcons.getRawGlyphMap();

export const PickIconModal: React.FC<PickIconModalProps> = ({navigation}) => {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [filterText, setFilterText] = useState('');

  const filterIcons = () => {
    const icons = Object.keys(glyphMap);
    return icons.filter(icon =>
      icon.toLowerCase().includes(filterText.toLowerCase()),
    );
  };

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
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text variant="titleMedium">Pick Icon</Text>
        <TouchableOpacity onPress={onSelectIcon}>
          <Text style={styles.select}>Select</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Filter icons"
        onChangeText={setFilterText}
        value={filterText}
        underlineColor={themeColors.grey[400]}
      />
      <FlatList
        style={styles.iconContainer}
        contentContainerStyle={styles.iconContentContainer}
        data={filterIcons()}
        renderItem={({item}) => (
          <IconItem
            icon={item}
            selectedIcon={selectedIcon}
            onIconPress={onIconPress}
          />
        )}
        keyExtractor={item => item}
        numColumns={4}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: themeColors.grey[400],
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  select: {
    fontSize: 16,
    color: themeColors.primary,
  },
  iconContainer: {
    flex: 1,
  },
  iconContentContainer: {
    padding: 8,
    justifyContent: 'space-evenly',
  },
});
