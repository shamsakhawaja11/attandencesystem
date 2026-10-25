import { Pressable, Text, View } from "react-native";

export default function DashboardScreen({navigation}) {
    const [studentId, studentName] = route.params;


    addCourse=()=>{
        navigation.replace('AddCourse');
    }

    addClass=()=>{
        navigation.replace('AddClass');
    }

    addSchedule=()=>{
        navigation.replace('AddSchedule');
    }
    
    return (
        <View>

            <Text>Welcome, {studentId} {studentName}</Text>
            <Text>Attandance Managment</Text>
            <Text>Welcome Back!</Text>
            <Text>Manage your classes, courses and attendance efficently</Text>

            <View>
                <View>
                    <Text>Add Course</Text>
                    <Text>Create a new Course (Subject)</Text>
                    <Pressable onPress={addCourse}><Text></Text></Pressable>
                </View>
                <View>
                    <Text>Add Class</Text>
                    <Text>Create a new Class for a course (Subject)</Text>
                    <Pressable onPress={addClass}><Text></Text></Pressable>
                </View>
                <View>
                    <Text>Add Schedule</Text>
                    <Text>set class timing and assign subject</Text>
                    <Pressable onPress={addCourse}><Text></Text></Pressable>
                </View>

                <View>
                    <Text>Today's Classes</Text>
                </View>
                <View>
                    <View>
                        <Text>BSCS-3A<Text>Class</Text></Text>
                        <Text>Programming Fundamentals<Text>Subject</Text></Text>
                        <Text>08:30AM-09:30AM<Text>Time</Text></Text>
                        <Pressable onPress={markAttendance}><Text>Mark Attendance</Text></Pressable>

                    </View>
                    <View>
                        <Text>BSCS-1A<Text>Class</Text></Text>
                        <Text>Mobile Application Development<Text>Subject</Text></Text>
                        <Text>10:30AM-11:30AM<Text>Time</Text></Text>
                        <Pressable onPress={markAttendance}><Text>Mark Attendance</Text></Pressable>
                    </View>
                    <View>
                        <Text>BSCS-8A<Text>Class</Text></Text>
                        <Text>Database Systems<Text>Subject</Text></Text>
                        <Text>12:30AM-1:30AM<Text>Time</Text></Text>
                        <Pressable onPress={markAttendance}><Text>Mark Attendance</Text></Pressable>
                    </View>
                    <View>
                        <Text>BSCS-8B<Text>Class</Text></Text>
                        <Text>Object Oriented Programming<Text>Subject</Text></Text>
                        <Text>2:30AM-3:30AM<Text>Time</Text></Text>
                        <Pressable onPress={markAttendance}><Text>Mark Attendance</Text></Pressable>
                    </View>

                </View>

            </View>
        </View>
    )
}