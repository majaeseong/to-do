import React from "react";
import {Text, View, TouchableOpacity, StyleSheet,Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

//stateless가 아닌 statefull로하는 이유는
//수정 시 스테이트가 변경되어야하기 때문.
export default class Todo extends React.Component{

    state={
        isEditing:false,
        isCompleted:false
    }
                                            //서클 스타일을 어레이로 만들어준다.
    render(){
        const {isCompleted} = this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[styles.circle, isCompleted?styles.completeCircle:styles.uncompleteCircle]}> 
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello </Text>
            </View>
        )
    }

    _toggleComplete = () =>{
        this.setState(prevSate=>{   //현재 상태 갖다줌
            return({
                isCompleted: !prevSate.isCompleted
            })
        })
    }

}

const styles= StyleSheet.create({
    container: {
        width:width-50,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems:"center"
      },
      circle:{
        width:30,
        height:30,
        borderRadius:15, //이건 항상 위드와 하이트의 절반이어야함.
        borderColor:"red",
        borderWidth:3,
        marginRight:15
      },
      completeCircle:{
        borderColor:"#bbb"
      },
      uncompleteCircle:{
        borderColor:"red"
      },
      text:{
          fontSize:20,
          fontWeight:"600",
          marginVertical:20
      }
})