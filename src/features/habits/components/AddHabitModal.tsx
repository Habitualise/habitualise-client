import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface AddHabitModalProps {
  navigation: any;
}

export const AddHabitModal: React.FC<AddHabitModalProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <MaterialIcons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Habit</Text>
        <View style={{width: 24}} />
      </View>
      <View style={styles.content}>{/* Add content here */}</View>
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
