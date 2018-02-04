import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform,ScrollView } from 'react-native';
import Todo from "./Todo";
const {height, width} = Dimensions.get("window"); //전체 페이지 크기 구하는 방법 * width사용 가능
export default class App extends React.Component {
  state={
    newToDo:""
  }
  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>To Do!</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"new to do"} placeholderTextColor={"#999"}
            value={newToDo} 
            onChangeText={this._ControlNewToDo}
            returnKeyType={"done"}
            autoCorrect={false}/>

          <ScrollView contentContainerStyle={styles.todos}>
            <Todo/>
          </ScrollView>

        </View>
      </View>
    );
  }

  _ControlNewToDo = text =>{
    this.setState({
      newTodo:text
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:50,
    marginBottom:30,
    fontWeight:"400"
  },
  card:{
    backgroundColor:"white",
    flex:1,
    width:width-25,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android:{
        elevation:3
      }
    })
  },
  input:{
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth : 1,
    fontSize:25
  },
  todos:{
    alignItems:"center"
  }
});
