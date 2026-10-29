import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";


//flatList   image upload   Show data in list and table on UI  
//filter map foeach reduce  find etc

export default function App() {

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescrition] = useState('')
  const [recipe, setRecipe] = useState([])
  const [steps, setSteps] = useState([]);
  const types = [
    { label: 'chinese', value: 'Chinese' },
    { label: 'pakistan', value: 'Pakistan' }
  ]

  const addSteps = () => {
    let step = description.trim();

    setSteps(...steps, step);
    setDescrition('')
  }
  const deleteSteps = (index) => {
    const newSteps = steps.filter((item, ind) =>
      ind !== index
    )
    setSteps(newSteps);
  }
  const save=()=>{
    const newRecipe={name,type,steps}
    setRecipe([...recipe,newRecipe]);
  }

  return (
    <View>

      <View>
        <Text>Recipe  Details</Text>
        <Text>Name</Text>
        <TextInput onChangeText={setName} />
        <Text>Type</Text>

        <Dropdown
          data={types}
          labelField="label"
          valueField="value"
          value={type}
          onChange={(item) => setType(item)}
        />

        <View>
          <Text>Add Recipe Step</Text>
          <TextInput onChangeText={setDescrition} multiline={true} />
        </View>

        <Pressable onPress={addSteps}>
          <Text>Add Step</Text>
        </Pressable>

        <View>
          {
            steps.map((item, index) => (
              <Text>{index + 1} {item} <Pressable onPress={() => deleteSteps((index))}><Text>Delete</Text></Pressable></Text>
            ))
          }
        </View>

        <Pressable onPress={() => setSteps('')}><Text>Clear All Steps</Text></Pressable>
        <Pressable onPress={save}><Text>Save Recipe</Text></Pressable>
        




      </View>

    </View>
  )
}