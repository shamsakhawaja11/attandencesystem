
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
import { addStudent, getSections } from '../db/db2';

type SectionOption = {
  label: string;
  value: string;
};

type Section = {
  name: string;
  semester_number: number;
};

export default function AddStudents() {
  const [name, setName] = useState('');
  const [regno, setRegno] = useState('');
  const [section, setSection] = useState<string | null>(null);
  const [sections, setSections] = useState<SectionOption[]>([]);

  const loadSections = useCallback(() => {
    getSections((data: Section[]) => {
      setSections(
        data.map(item => ({
          label: `${item.name} - Semester ${item.semester_number}`,
          value: item.name,
        })),
      );
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadSections();
    }, [loadSections]),
  );

  const add = () => {
    if (!name.trim() || !regno.trim() || section === null) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    addStudent(name.trim(), regno.trim(), section);

    setName('');
    setRegno('');
    setSection(null);

    Alert.alert('Success', 'Student added.');
  };

  const cancel = () => {
    setName('');
    setRegno('');
    setSection(null);
  };

  return (
    <View style={styles.container}>
      <Text>Student Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter student name"
        style={styles.input}
      />

      <Text>Registration Number</Text>
      <TextInput
        value={regno}
        onChangeText={setRegno}
        placeholder="Enter registration number"
        style={styles.input}
      />

      <Text>Section</Text>
      <Dropdown
        data={sections}
        labelField="label"
        valueField="value"
        value={section}
        onChange={item => setSection(item.value)}
        placeholder="Select section"
        disable={sections.length === 0}
        style={styles.dropdown}
        containerStyle={styles.dropdownList}
        maxHeight={200}
      />

      {sections.length === 0 && (
        <Text>No sections available. Add a section first.</Text>
      )}

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>Add Student</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
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
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
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
