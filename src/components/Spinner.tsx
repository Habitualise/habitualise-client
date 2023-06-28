import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size={'large'} />
  </View>
);

const styles = StyleSheet.create({
  spinnerContainer: {
    marginVertical: 20,
  },
});

export default Spinner;
