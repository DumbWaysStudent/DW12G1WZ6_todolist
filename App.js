import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listTask : ['swim','study','sleep','run'],
      valueInput : ''
    };
  }

  addTask=()=>{
    const prevState = this.state.dummy
    const arrayItem = [...prevState,this.state.valueInput] 
    this.setState({
      listTask : [...arrayItem]
    })
  }

  deleteTask=(item)=>{
    const prevState = this.state.dummy;
    const array = prevState.filter(dummy =>{
      return dummy != item
    })
    this.setState({
      listTask:[...array]
    })
  }

  render() {
    return (
      <View>
         <View style={{flexDirection:"row"}}>
          <TextInput
            style={styles.input}
            placeholder ='Masukan data'
            value = {this.state.valueInput}
            onChangeText={input => this.setState({valueInput : input})}
          />
           <TouchableOpacity style={styles.button}
            onPress={this.add }>
            <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.text}>
          {this.state.dummy.map((item,index)=>{
            return(
              <View key={index} style={{flexDirection:"row"}}>
                <Text style={styles.text}>{item}</Text>
                <Icon name='trash' style={styles.buttonDel}
                  onPress={() => this.del(item)}></Icon>
              </View>
              )
            }
          )}
        </View>

      </View>
   
    );
  }
}
const styles = StyleSheet.create({
  button:{
    padding: 10,
    height: 40, 
    marginTop: 10 ,
    backgroundColor :'skyblue'},
  input:{
    height: 40, 
    width : 250,
    margin :10,
    borderColor: 'gray', borderWidth: 1
  },
  text:{
    padding:10,
    width : 200
  },
  buttonDel:{
    color :'white',
    marginBottom : 10,
    padding: 10,
    backgroundColor :'red'
  },
  
});
