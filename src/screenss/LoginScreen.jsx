import { useState } from 'react';
import { Alert, FlatList, Modal, Pressable, Text, TextInput, View } from 'react-native';

export default function MarkAttendanceScreen({ route }) {
    const { item } = route.params;

    const [students, setStudents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [regNo, setRegNo] = useState('');
    const [name, setName] = useState('');

    const presentCount = students.filter(s => s.present).length;
    const absentCount = students.length - presentCount;

    const addStudent = () => {
        if (!regNo.trim() || !name.trim()) {
            Alert.alert('Missing fields', 'Registration number and name are required.');
            return;
        }
        setStudents([...students, { regNo: regNo.trim(), name: name.trim(), present: true }]);
        setRegNo('');
        setName('');
        setModalVisible(false);
    };

    const toggleStatus = index => {
        const updated = [...students];
        updated[index] = { ...updated[index], present: !updated[index].present };
        setStudents(updated);
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.course_title}</Text>
            <Text>{item.class_name} | {item.day} {item.time_slot}</Text>
            <Text style={{ marginVertical: 8 }}>Date: {new Date().toDateString()}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontWeight: 'bold' }}>Students ({students.length})</Text>
                <Text>Present {presentCount}  |  Absent {absentCount}</Text>
            </View>

            <FlatList
                data={students}
                keyExtractor={(s, index) => index.toString()}
                renderItem={({ item: s, index }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
                        <Text style={{ width: 30 }}>{index + 1}</Text>
                        <Text style={{ width: 110 }}>{s.regNo}</Text>
                        <Text style={{ flex: 1 }}>{s.name}</Text>
                        <Pressable
                            onPress={() => toggleStatus(index)}
                            style={{
                                width: 40,
                                padding: 8,
                                borderRadius: 6,
                                alignItems: 'center',
                                backgroundColor: s.present ? '#D7F5DD' : '#FADADA',
                            }}
                        >
                            <Text style={{ fontWeight: 'bold' }}>{s.present ? 'P' : 'A'}</Text>
                        </Pressable>
                    </View>
                )}
            />

            <Pressable
                onPress={() => setModalVisible(true)}
                style={{
                    position: 'absolute', right: 20, bottom: 20,
                    width: 56, height: 56, borderRadius: 28,
                    backgroundColor: '#0B63CE', alignItems: 'center', justifyContent: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 28 }}>+</Text>
            </Pressable>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 24 }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16, gap: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Add Student</Text>
                        <Text>Enter student registration number and name to add to this class.</Text>

                        <Text>Registration Number <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            placeholder="e.g. 2024-CS-0001"
                            value={regNo}
                            onChangeText={setRegNo}
                            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 }}
                        />

                        <Text>Student Name <Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            placeholder="e.g. Ali Raza"
                            value={name}
                            onChangeText={setName}
                            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 }}
                        />

                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
                            <Pressable
                                onPress={() => setModalVisible(false)}
                                style={{ flex: 1, borderWidth: 1, borderColor: '#0B63CE', padding: 12, borderRadius: 8, alignItems: 'center' }}
                            >
                                <Text style={{ color: '#0B63CE' }}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                onPress={addStudent}
                                style={{ flex: 1, backgroundColor: '#0B63CE', padding: 12, borderRadius: 8, alignItems: 'center' }}
                            >
                                <Text style={{ color: 'white' }}>Add Student</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}