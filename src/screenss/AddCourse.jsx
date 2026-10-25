import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { saveCourse } from '..database/'
export default function AddCourse() {

    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')

    const saveCourse = async () => {
        try {
            if (!title.trim() || !code.trim()) {
                Alert.alert('Both are required');
                return;
            }
            const result = await saveCourse(title.trim(), code.trim());
            Alert.alert('Successfully added!');
        } catch (error) {
            console.log(error);
            Alert.alert('failed in registrating')
        }

    }
    return (
        <View>
            <Text>Add Courses</Text>
            <Text>Create a new course to use in your classes</Text>

            <Text>Course Title*</Text>
            <TextInput placeholder="Enter course title" onChangeText={setTitle} value={title} />
            <Text>Course Code*</Text>
            <TextInput placeholder="Enter course code" onChangeText={setCode} value={code} />
            <Text>e.g CS101, MATH101, PF103</Text>

            <Pressable onPress={saveCourse}><Text>Save Course</Text></Pressable>

        </View>
    )
}