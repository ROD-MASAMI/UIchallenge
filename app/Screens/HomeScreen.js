import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Tabs from '../Components/Tabs';
import NavBar from '../Components/NavBar';
import OfferCard from '../Components/OfferCard';
import Label from '../Components/Label';
import Fruits from '../Components/Fruits';
import {Colors} from '../Config';

const HomeScreen = () => {
  const [Active, setActive] = useState(0);
  const SwitchScreen = e => {
    setActive(e);
  };
  return (
    <View style={Styles.container}>
      <NavBar />
      <View style={Styles.body}>
        <OfferCard />
        <Label />
        <Fruits />
      </View>
      <Tabs onPress={e => SwitchScreen(e)} ActiveIndex={Active} />
    </View>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  body: {
    flex: 15,
    backgroundColor: Colors.Background,
    alignItems: 'center',
    padding: 10,
  },
});
