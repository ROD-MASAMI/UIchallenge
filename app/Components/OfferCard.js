import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../Config';
import basket from '../Assets/Images/basket.png';
const OfferCard = () => {
  return (
    <View style={Styles.container}>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 4,
        }}>
        <Text
          style={{
            color: Colors.Secondary,
            letterSpacing: 4,
            fontSize: 22,
            fontWeight: '600',
          }}>
          OFFER
        </Text>
        <Text
          style={{
            color: '#FFFF',
            fontSize: 28,
            fontWeight: '800',
          }}>
          40 % OFF
        </Text>
        <Text
          style={{
            color: '#FFFF',
            fontSize: 14,
            fontWeight: '800',
            maxWidth: '70%',
          }}>
          In honor of World Health Day We’d like to give you this amazing
          offers.
        </Text>
        <View style={Styles.button}>
          <Text style={{color: Colors.Black, fontWeight: '800'}}>
            View Offers
          </Text>
        </View>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <Image
          source={basket}
          style={{
            height: '90%',
            width: '80%',
            // position: 'absolute',
            left: -110,
            top: 5,
          }}
        />
      </View>
    </View>
  );
};

export default OfferCard;
const Styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '90%',
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    borderRadius: 30,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
