import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dummy : ['swim','study','sleep','run']
    };
  }

  render() {
    return (
      <View>
        {this.state.dummy.map((item,index)=>{
          return(
            <View key={index}>
              <Text>{item}</Text>
              </View>
          )
        }
      )}
      </View>
    );
  }
}
