import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../Config';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
const Tabs = props => {
  return (
    <View style={Styles.container}>
      {Array(4)
        .fill()
        .map((item, index) => {
          const Fill =
            props.ActiveIndex === index ? Colors.Secondary : Colors.Gray;
          return (
            <TouchableOpacity
              onPress={() => props.onPress(index)}
              key={index}
              style={{
                borderTopWidth: 2,
                borderColor:
                  props.ActiveIndex === index ? Colors.Secondary : Colors.Gray,
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {index === 0 ? (
                <Icon1 name="home" size={40} color={Fill} />
              ) : index === 1 ? (
                <Icon2 name="search" size={40} color={Fill} />
              ) : index === 2 ? (
                <Icon2 name="heart" size={40} color={Fill} />
              ) : index === 3 ? (
                <Icon3 name="calendar-text-outline" size={40} color={Fill} />
              ) : (
                <></>
              )}
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default Tabs;

const Styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: Colors.Primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 1,
  },
});
