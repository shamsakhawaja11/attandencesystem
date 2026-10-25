
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { addGrade, getStudents } from '../db/db2';

type StudentOption = {
  label: string;
  value: number;
};

type Student = {
  id: number;
  name: string;
  regno: string;
};

export default function AssignGrade() {
  const [students, setStudents] = useState<StudentOption[]>([]);
  const [studentId, setStudentId] = useState<number | null>(null);
  const [grade, setGrade] = useState('');

  const loadStudents = useCallback(() => {
    getStudents((data: Student[]) => {
      setStudents(
        data.map(item => ({
          label: `${item.name} - ${item.regno}`,
          value: item.id,
        })),
      );
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadStudents();
    }, [loadStudents]),
  );

  const assign = () => {
    if (studentId === null || !grade.trim()) {
      Alert.alert('Error', 'Please select a student and enter a grade.');
      return;
    }

    addGrade(studentId, grade.trim());

    setStudentId(null);
    setGrade('');

    Alert.alert('Success', 'Grade assigned.');
  };

  const cancel = () => {
    setStudentId(null);
    setGrade('');
  };

  return (
    <View style={styles.container}>
      <Text>Select Student</Text>

      <Dropdown
        data={students}
        labelField="label"
        valueField="value"
        value={studentId}
        onChange={item => setStudentId(item.value)}
        placeholder="Select student"
        disable={students.length === 0}
        style={styles.dropdown}
        containerStyle={styles.dropdownList}
        maxHeight={200}
      />

      {students.length === 0 && (
        <Text>No students available. Add a student first.</Text>
      )}

      <Text>Grade</Text>
      <TextInput
        value={grade}
        onChangeText={setGrade}
        placeholder="Enter grade (e.g. A)"
        style={styles.input}
      />

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={assign}>
          <Text style={styles.buttonText}>Assign Grade</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  dropdownList: {
    zIndex: 1000,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#3157D5',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
