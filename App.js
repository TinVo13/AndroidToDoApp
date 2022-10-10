import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Task from "./component/Task";
import Icon from "react-native-vector-icons/Feather";

const height = Dimensions.get("window").height;
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  handleAddTodo = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  handleDelete = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  var height = Dimensions.get("window").height;
  var width = Dimensions.get("window").width;
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#FA7070",
      width: "100%",
      height: "100%",
    }}
    >
      <View
        style={{
          marginTop: 0.03 * height,
          padding: 10,
          backgroundColor: '#FBF2CF',
          borderRadius: 100,
          margin: 10
        }}
      >
        <TextInput
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
          value={task}
          onChangeText={text => setTask(text)}
          placeholder={"Do it now!"}
        ></TextInput>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            margin: 10,
            borderRadius: 20,
            backgroundColor: '#C6EBC5'
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{ padding: 10, width:width}}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => handleDelete(index)}>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: "100%",
  },
});
