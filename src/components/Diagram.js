import React, {Component} from 'react';
import {View, Button, StyleSheet, Dimensions} from 'react-native';
import {color, t} from 'react-native-tailwindcss';
import {Svg, G, Line, Circle, Rect, Text} from 'react-native-svg';

export default class SideBar extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#eee',
        // marginLeft: 100,
        // marginRight: 100,
      },
      content: {
        marginTop: 40,
        marginLeft: 120,
        marginRight: 60,
      },
    });
    const GRAPH_MARGIN = 20;
    const SVGHeight = 600;
    const SVGWidth = Dimensions.get('window').width;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
    return (
      <View style={styles.container}>
        <Text>Diagram</Text>
        <Text>is</Text>
        <Text>gonna</Text>
        <Text>down</Text>
        <Text>to</Text>
        <Text>below</Text>
        <Svg
          width={SVGWidth}
          height={SVGHeight}
          style={{backgroundColor: '#a0a0a0'}}>
          <G y={graphHeight - 500} x="100">
            {/* bottom axis */}

            <Circle
              cx="30"
              cy="90"
              r="30"
              fill="red"
              onPress={() => {
                alert('cir');
              }}
            />
            <Text
              x="30"
              y="90"
              fontSize="15"
              fonWeight="bold"
              textAnchor="middle"
              scale="1"
              fill="none"
              stroke={color.blue300}
              // style={[t.bgBlue200]}
            >
              Alert
            </Text>
            <Rect
              x="90"
              y="60"
              width="60"
              height="60"
              fill="#9f9fef"
              strokeWidth="0.5"
              stroke="rgba(0,0,0,0.5)"
              onPress={() => {
                alert('rec');
              }}
            />
            <Rect
              x="180"
              y="60"
              width="60"
              height="60"
              fill="#ff0000"
              strokeWidth="0.5"
              stroke="rgba(0,0,0,0.5)"
            />
            <Line
              x1="30"
              y1="0"
              x2={graphWidth - 100}
              y2="0"
              stroke={'white'}
              strokeWidth="1.5"
            />
            <Line
              x1={graphWidth - 100}
              y1="0"
              x2={graphWidth - 100}
              y2="180"
              stroke={'white'}
              strokeWidth="3"
              onPress={() => {
                alert('hello?');
              }}
            />
            <Line
              x1="30"
              y1="0"
              x2="30"
              y2="60"
              stroke={'red'}
              strokeWidth="3"
            />
            <Line
              x1="120"
              y1="0"
              x2="120"
              y2="60"
              stroke={'blue'}
              strokeWidth="3"
            />
          </G>
        </Svg>
      </View>
    );
  }
}
