import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../Config';
import Icon4 from 'react-native-vector-icons/AntDesign';
const Label = () => {
  return (
    <View style={Styles.container}>
      <Text style={{color: Colors.Gray, fontSize: 20, fontWeight: '700'}}>
        Recommended Fruits
      </Text>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '25%',
        }}>
        <Text style={{color: Colors.Secondary, fontSize: 16}}>View All</Text>
        <Icon4 name="right" size={20} color={Colors.Secondary} />
      </View>
    </View>
  );
};

export default Label;
const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 5,
  },
});
