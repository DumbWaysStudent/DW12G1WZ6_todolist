import React, { Component } from 'react';
import { View,Text,TextInput,StyleSheet ,TouchableOpacity,CheckBox} from 'react-native';
import {Icon} from 'native-base';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dummy : [
        {task:'work', done :false},
        {task :'swim', done :false},
        {task : 'study', done : false},
        {task :'sleep', done : false},
        {task : 'run', done : false} ],
      isUpdate : false,
      valueInput : '',
      valueIndex: null
    }
  }
  addTask =()=>{
    const prevState = this.state.dummy;
    const textInputValue = {task :this.state.valueInput, done: false};
    let array = [...prevState,textInputValue];
    this.setState({
      dummy:[...array]
    })
  }

  deleteTask=(item)=>{
    const prevState = this.state.dummy;
    const array = prevState.filter(dummy =>{
      return dummy != item
    })
    this.setState({
      dummy:[...array]
    })
  }

  handleCheckBox=(index)=>{
    let state =this.state.dummy;
    state[index].done = !state[index].done;
   this.setState({
    dummy:[...state]
   })

  }

  changeButton=(index)=>{
    this.setState({
      isUpdate:true,
      valueInput : this.state.dummy[index].task,
      valueIndex : index
      
    })
  }

  updateTask =()=>{
    let state = this.state.dummy;
    const index = this.state.valueIndex;
    state[index].task = this.state.valueInput
    this.setState({
      dummy: [...state],
      isUpdate : false,
      valueIndex : null,
      valueInput : null
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
           
            {!this.state.isUpdate ?
            <TouchableOpacity style={styles.button} 
            onPress={this.addTask }>
            <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.button}
            onPress={this.updateTask }>
            <Text style={styles.textButton}>Update</Text>
            </TouchableOpacity>
             }
         

        </View>

        <View style={styles.text}>
          {this.state.dummy.map((item,index)=>{
            return (
              <View key={index}style={{flexDirection:"row"}}>

                <CheckBox
                value= {item.done}
                onChange = {()=>this.handleCheckbox(index)}>
                </CheckBox>

                <Text style={styles.text}>
                  {item.task}
                </Text>

                <Icon name='trash' style={styles.buttonDel}
                  onPress={() => this.deleteTask(item)}>
                  
                </Icon>
                <Icon name='create' style={styles.buttonUpdate}
                  onPress={() => this.changeButton(index)}>
                </Icon>

              </View>
            )
          })}
        </View>
      </View>
    
    );
  }
};
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
  textButton:{
    color :'white'
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
  buttonUpdate:{
    color :'white',
    marginLeft : 5,
    marginBottom : 10,
    padding: 10,
    backgroundColor :'orange'
  }
});
