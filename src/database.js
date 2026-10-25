import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);

const db = SQLite.openDatabase({
  name: 'CollegeDB.db',
  location: 'default',
});

export const initializeDatabase = async () => {
  const database = await db;

  await database.executeSql(`
    CREATE TABLE IF NOT EXISTS Students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      regno text unique,
      email text unique
      password text,
      name TEXT NOT NULL,
      semester INTEGER,
      cgpa REAL
    );
  `);

  await database.executeSql(`
    create table if not exists Courses(
    id integer unique autoincrement,
    course_title text not null,
    course_code text not null unique,
    )`
  );

  await database.executeSql(`
    create table if not exists
  
    `)

  console.log('Database created successfully');
};
export const studentExists = async (regno, email) => {
  const database = await db;
  const [result] = await database.executeSql(`
      select id from student where regno=? OR email=? and password=?`,
    [regno, email, password]
  );
  return result.rows.length > 0;
};

export const saveCourse = async (title, code) => {
  const database = await db;
  const [res] = await database.executeSql(`insert into courses values(?,?)`[title, code]);
  return res.rowsAffected
}
export const getCourses = async () => {
  const database=await db;
  const[res]=await database.executeSql(`select * from courses`);
  return res.rows;
}
export const saveClass=async()=>{
  const database=await db;
  const[res]=await database.executeSql(`insert into classes values(?,?)`[course,discipline,sem,section]);
  return res.rowsAffected;
}

export default db;