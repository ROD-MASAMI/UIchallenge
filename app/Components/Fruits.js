import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../Config';
import Icon4 from 'react-native-vector-icons/AntDesign';
import apple from '../Assets/Images/apple.png';
import pinneapple from '../Assets/Images/pinneaple.png';
const Fruits = () => {
  const data = [
    {
      Rating: '5.0',
      Name: 'Pinneaple',
      Price: '8,000',
      image: pinneapple,
    },
    {
      Rating: '4.7',
      Name: 'Apple',
      Price: '25,00',
      image: apple,
    },
  ];
  return (
    <View style={Styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <View style={Styles.card}>
              <Image
                source={item.image}
                style={
                  index === 1
                    ? {
                        height: '120%',
                        width: '150%',
                        position: 'absolute',
                        right: -20,
                        bottom: 10,
                      }
                    : {
                        height: '140%',
                        width: '130%',
                        bottom: 10,
                        right: 5,
                        position: 'absolute',
                        left: -15,
                      }
                }
              />
            </View>
            <View style={Styles.Bottomcard}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <Icon4 name="star" size={14} color={Colors.Secondary} />
                <Text style={{color: 'white', marginLeft: 5}}>
                  {item.Rating}
                </Text>
              </View>

              {/*  */}

              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: Colors.Secondary,
                    letterSpacing: 4,
                    fontSize: 18,
                  }}>
                  FRUIT
                </Text>
                <Text
                  style={{
                    color: '#FFFF',
                    fontSize: 18,
                  }}>
                  {item.Name}
                </Text>
                <Text
                  style={{
                    color: Colors.Secondary,
                    fontSize: 16,
                  }}>
                  Tshs. {item.Price}
                </Text>
              </View>

              {/*  */}
              <View
                style={{
                  width: '100%',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  paddingHorizontal: 5,
                }}>
                <Text style={{color: Colors.Gray, marginLeft: 5}}>per Kg</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Fruits;
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    marginTop: 55,
  },
  card: {
    height: 120,
    width: 165,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    backgroundColor: '#43311B',
  },
  Bottomcard: {
    height: 160,
    backgroundColor: Colors.Black,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 165,
    padding: 3,
  },
});
