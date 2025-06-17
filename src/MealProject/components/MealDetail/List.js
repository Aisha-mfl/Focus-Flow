import {StyleSheet, Text } from 'react-native';
import React from 'react';

const List = ({data}) => {
  return data.map((dataPoint) => (
    <Text style={styles.subtitle} key={dataPoint}>
      {dataPoint}
    </Text>
  ));
};

export default List;

const styles = StyleSheet.create({
  subtitle: {
    marginHorizontal: 24,
    padding: 7,
    fontSize: 16,
    marginVertical: 4,
    borderBottomColor: '#cccc',
    borderBottomWidth: 2,
  },
});
