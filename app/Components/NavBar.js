import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon4 from 'react-native-vector-icons/AntDesign';
import {Colors} from '../Config';
import Cart from '../Assets/Images/cart.png';
const NavBar = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftNav}>
        <Icon4 name="menu-fold" size={30} color={Colors.Gray} />
      </View>
      <View style={Styles.rightNav}>
        <View>
          <Image source={Cart} style={{height: 30, width: 30}} />
          <View style={Styles.badge} />
        </View>

        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/88656560?v=4'}}
          style={{height: 60, width: 60, borderRadius: 30, borderWidth: 1}}
        />
      </View>
    </View>
  );
};

export default NavBar;
const Styles = StyleSheet.create({
  container: {
    flex: 1.7,
    flexDirection: 'row',
  },
  leftNav: {
    width: 80,
    height: 100,
    position: 'absolute',
    left: 1,
    top: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightNav: {
    position: 'absolute',
    right: 15,
    top: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 3,
    width: '35%',
    justifyContent: 'space-around',
  },
  badge: {
    backgroundColor: '#FE8668',
    height: 10,
    width: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: -2,
    right: -3,
  },
});
