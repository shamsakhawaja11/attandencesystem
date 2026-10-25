
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Management</Text>
      <Text style={styles.subtitle}>Choose an option</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('AddStudents')}
      >
        <Text style={styles.buttonText}>Add Students</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('AddSection')}
      >
        <Text style={styles.buttonText}>Add Section</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('AssignGrade')}
      >
        <Text style={styles.buttonText}>Assign Grade</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#3157D5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
