import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {color, t} from 'react-native-tailwindcss';

export default class SideBar extends Component {
  render() {
    const styles = StyleSheet.create({
      navbar: {
        flex: 1,
        // marginLeft: 0,
        position: 'absolute',
        width: 80,
        height: Dimensions.get('window').height,
        alignItems: 'stretch',
        // flexDirection: 'row',
        alignSelf: 'stretch',
      },
      content: {
        marginTop: 40,
        marginLeft: 120,
        marginRight: 60,
      },
    });
    return (
      <View style={styles.navbar}>
        <Text>hello</Text>
        <Button title="test" style={({color: color.red200}, [])} />
      </View>
    );
  }
}
