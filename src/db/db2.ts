
// import SQLite from 'react-native-sqlite-storage';

// type Section = {
//   name: string;
//   semester_number: number;
// };

// type Student = {
//   id: number;
//   name: string;
//   regno: string;
//   section: string;
// };

// const db = SQLite.openDatabase(
//   { name: 'student.db', location: 'default' },
//   () => console.log('Database opened successfully'),
//   error => console.log('Database open error:', error),
// );

// export const initDB = (): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(`
//         CREATE TABLE IF NOT EXISTS student (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           name TEXT NOT NULL,
//           regno TEXT,
//           section TEXT
//         );
//       `);

//       tx.executeSql(`
//         CREATE TABLE IF NOT EXISTS section (
//           name TEXT PRIMARY KEY,
//           semester_number INTEGER NOT NULL
//         );
//       `);

//       tx.executeSql(`
//         CREATE TABLE IF NOT EXISTS assign_grade (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           student_id INTEGER,
//           grade TEXT
//         );
//       `);
//     },
//     error => console.log('Table creation error:', error),
//     () => console.log('Tables created successfully'),
//   );
// };

// export const addSection = (
//   name: string,
//   semester: string | number,
//   callback?: (success: boolean) => void,
// ): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'INSERT INTO section (name, semester_number) VALUES (?, ?)',
//         [name.trim(), Number(semester)],
//         () => callback?.(true),
//         (_tx, error) => {
//           console.log('Add section SQL error:', error.message);
//           callback?.(false);
//           return false;
//         },
//       );
//     },
//     error => {
//       console.log('Add section transaction error:', error);
//       callback?.(false);
//     },
//   );
// };

// export const getSections = (
//   callback: (sections: Section[]) => void,
// ): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'SELECT * FROM section ORDER BY name ASC',
//         [],
//         (_tx, results) => {
//           const sections: Section[] = [];

//           for (let i = 0; i < results.rows.length; i++) {
//             sections.push(results.rows.item(i) as Section);
//           }

//           callback(sections);
//         },
//         (_tx, error) => {
//           console.log('Get sections SQL error:', error.message);
//           return false;
//         },
//       );
//     },
//     error => console.log('Get sections transaction error:', error),
//   );
// };

// export const addStudent = (
//   name: string,
//   regno: string,
//   section: string,
//   callback?: (success: boolean) => void,
// ): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'INSERT INTO student (name, regno, section) VALUES (?, ?, ?)',
//         [name.trim(), regno.trim(), section],
//         () => callback?.(true),
//         (_tx, error) => {
//           console.log('Add student SQL error:', error.message);
//           callback?.(false);
//           return false;
//         },
//       );
//     },
//     error => {
//       console.log('Add student transaction error:', error);
//       callback?.(false);
//     },
//   );
// };

// export const getStudents = (
//   callback: (students: Student[]) => void,
// ): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'SELECT * FROM student ORDER BY name ASC',
//         [],
//         (_tx, results) => {
//           const students: Student[] = [];

//           for (let i = 0; i < results.rows.length; i++) {
//             students.push(results.rows.item(i) as Student);
//           }

//           callback(students);
//         },
//         (_tx, error) => {
//           console.log('Get students SQL error:', error.message);
//           return false;
//         },
//       );
//     },
//     error => console.log('Get students transaction error:', error),
//   );
// };

// export const addGrade = (
//   studentId: number,
//   grade: string,
//   callback?: (success: boolean) => void,
// ): void => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'INSERT INTO assign_grade (student_id, grade) VALUES (?, ?)',
//         [studentId, grade.trim()],
//         () => callback?.(true),
//         (_tx, error) => {
//           console.log('Add grade SQL error:', error.message);
//           callback?.(false);
//           return false;
//         },
//       );
//     },
//     error => {
//       console.log('Add grade transaction error:', error);
//       callback?.(false);
//     },
//   );
// };
