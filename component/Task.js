import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
//import { Icon } from 'react-native-vector-icons/Feather';
import Icon from "react-native-vector-icons/Feather";

const Task = (props) => {
    var height = Dimensions.get('window').height;
    var width = Dimensions.get('window').width;
  return (
    <View style={{flex:1,backgroundColor:'#FA7070',margin:5}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#A1C298',borderRadius:1000,paddingHorizontal:10}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10}}>
            <TouchableOpacity style={{borderWidth:1,padding:10,backgroundColor:'#ffffff'}}>
            
            </TouchableOpacity>
            <Text style={{marginLeft:20,fontSize:30,fontWeight:'bold'}}>{props.text}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10}}>
            <TouchableOpacity style={{borderWidth:1,padding:10,borderRadius:1000}}>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    backgroundColor: "#FFF",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",       
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "blue",
  },
});

export default Task;
