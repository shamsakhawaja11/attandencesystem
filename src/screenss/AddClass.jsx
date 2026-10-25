import { useEffect, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { RadioButton } from 'react-native-paper';
import { getCourses } from '../database';

export default function AddClassScreen() {
    const [data, setData] = useState([]);
    const [course, setCourse] = useState(null);
    const [gender, setGender] = useState('');
    const [sem, setSem] = useState(null);
    const [sec, setSec] = useState(null);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const result = await getCourses();
                setData(result);
            } catch (error) {
                console.log('Error loading courses:', error);
            }
        };

        loadCourses();
    }, []);

    const semester = [
        { id: 1, sem: 1 },
        { id: 2, sem: 2 },
        { id: 3, sem: 3 },
        { id: 4, sem: 4 },
        { id: 5, sem: 5 },
        { id: 6, sem: 6 },
        { id: 7, sem: 7 },
        { id: 8, sem: 8 },
    ];

    const section = [
        { id: 1, section: 'A' },
        { id: 2, section: 'B' },
        { id: 3, section: 'C' },
        { id: 4, section: 'D' },
        { id: 5, section: 'E' },
    ];

    const saveClass = async () => {
        if (!course || !gender || !sem || !sec) {
            Alert.alert('Missing fields', 'Please fill in all required fields.');
            return;
        }

        const res = await saveClass(data, course,)
        if (res.rows.length > 0) Alert.alert('Validated', 'All class details have been selected.');
        Alert.alert('Something is wrong');
    };

    return (
        <View style={{ padding: 20, gap: 16 }}>
            <View>
                <Text>Add Class</Text>
                <Text>
                    Create a new class and assign it to a subject with class details.
                </Text>
            </View>

            <View>
                <Text>
                    Subject (Course) <Text style={{ color: 'red' }}>*</Text>
                </Text>

                <Dropdown
                    data={data}
                    labelField="course_title"
                    valueField="course_code"
                    placeholder="Select a course"
                    value={course}
                    onChange={item => setCourse(item.course_code)}
                />
            </View>

            <View>
                <Text>
                    Discipline <Text style={{ color: 'red' }}>*</Text>
                </Text>

                <RadioButton.Group
                    onValueChange={value => setGender(value)}
                    value={gender}
                >
                    {[
                        { value: 'CS', label: 'Computer Science' },
                        { value: 'AI', label: 'Artificial Intelligence' },
                        { value: 'SE', label: 'Software Engineering' },
                    ].map(item => (
                        <View
                            key={item.value}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <RadioButton value={item.value} />
                            <Text>{item.value} - {item.label}</Text>
                        </View>
                    ))}
                </RadioButton.Group>
            </View>

            <View>
                <Text>Semester</Text>
                <Dropdown
                    data={semester}
                    labelField="sem"
                    valueField="id"
                    placeholder="Select semester (1–8)"
                    value={sem}
                    onChange={item => setSem(item.id)}
                />
            </View>

            <View>
                <Text>Section</Text>
                <Dropdown
                    data={section}
                    labelField="section"
                    valueField="id"
                    placeholder="Select section (A–E)"
                    value={sec}
                    onChange={item => setSec(item.id)}
                />
            </View>

            <Pressable
                onPress={saveClass}
                style={{
                    backgroundColor: '#C62828',
                    padding: 14,
                    borderRadius: 8,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Save Class
                </Text>
            </Pressable>
        </View>
    );
}