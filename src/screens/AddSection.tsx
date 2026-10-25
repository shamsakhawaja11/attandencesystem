
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
import { addSection, getSections } from '../db/db2';

type Section = {
  id?: number;
  name: string;
  semester_number: number;
};

export default function AddSection() {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [data, setData] = useState<Section[]>([]);

  const loadSections = useCallback(() => {
    getSections((sections: Section[]) => {
      setData(sections);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadSections();
    }, [loadSections]),
  );

  const add = () => {
    const sectionName = name.trim();
    const semesterNumber = Number(semester);

    if (!sectionName || !semester.trim()) {
      Alert.alert('Error', 'Please enter section name and semester.');
      return;
    }

    if (!Number.isInteger(semesterNumber) || semesterNumber < 1) {
      Alert.alert('Error', 'Enter a valid semester number.');
      return;
    }

    addSection(sectionName, semester.trim());

    setName('');
    setSemester('');

    loadSections();

    Alert.alert('Success', 'Section added.');
  };

  const cancel = () => {
    setName('');
    setSemester('');
  };

  return (
    <View style={styles.container}>
      <Text>Section Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter section name"
        style={styles.input}
      />

      <Text>Semester</Text>
      <TextInput
        value={semester}
        onChangeText={setSemester}
        placeholder="Enter semester number"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>

      <Text style={styles.heading}>Saved Sections</Text>

      {data.length === 0 ? (
        <Text>No sections saved yet.</Text>
      ) : (
        data.map((item, index) => (
          <Text key={item.id ?? `${item.name}-${index}`} style={styles.item}>
            {item.name} - Semester {item.semester_number}
          </Text>
        ))
      )}
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
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#3157D5',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: 'white',
  },
  heading: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  item: {
    paddingVertical: 5,
  },
});
