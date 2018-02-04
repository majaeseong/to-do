import React from "react";
import {Text, View, TouchableOpacity, StyleSheet,Dimensions, TextInput} from "react-native";

const {height, width} = Dimensions.get("window");

//stateless가 아닌 statefull로하는 이유는
//수정 시 스테이트가 변경되어야하기 때문.
export default class Todo extends React.Component{

    state={
        isEditing:false,
        isCompleted:false,
        todoValue:""
    }
                                           
    render(){
        const {isCompleted, isEditing,todoValue} = this.state;
        const {text} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted?styles.completeCircle:styles.uncompleteCircle]}> 
                        </View>
                    </TouchableOpacity>
                    {isEditing?(
                        <TextInput value={todoValue}
                            style={[styles.input, styles.text, isCompleted?styles.completeText:styles.uncompleteText]}
                            multiline={true}
                            onChangeText={this._controlInput}
                            returnKeyType={"done"}
                            onBlur={this._finishEditing}/> //칸 밖을 클릭하면 종료
                    ):(
                        <Text style={[styles.text, isCompleted?styles.completeText:styles.uncompleteText]}>
                            {text}
                        </Text>
                    )}
                </View>
                
                {isEditing?(
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._finishEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✅</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ):(
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._startEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>🖌</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✂️</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                
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

    _startEditing = () =>{
        const {text} = this.props;
        this.setState({
            isEditing:true,
            todoValue:text
        })
    }

    _finishEditing = () =>{
        this.setState({
            isEditing:false
        })
    }

    _controlInput = text =>{
        this.setState({
            todoValue:text
        })
    }

}

const styles= StyleSheet.create({
    container: {
        width:width-50,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
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
      },
      completeText:{
        color:"#bbb",
        textDecorationLine:"line-through"
      },
    uncompleteText:{
        color:"black"
    },
    column:{
        flexDirection:"row",
        alignItems:"center",
        width: width/2,
        justifyContent:"space-between"
    },
    actions:{
        flexDirection:"row"
    },
    actionContainer:{
        marginVertical:10,
        marginHorizontal:10
    },
    input:{
        marginVertical:15,
        width:width/2
    }
})