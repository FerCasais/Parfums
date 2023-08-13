import { enablePromise } from "react-native-sqlite-storage";
import { openDatabase } from "react-native-sqlite-storage";

enablePromise(true);

const DATABASE_NAME = "task.db";

export async function getDBConnection() {
  const db = await openDatabase({ name: DATABASE_NAME, location: "default" });
  return db;
}

export async function createTables(db) {
  const query =
    "CREATE TABLE IF NOT EXISTS task(INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512)";
  return db.executeSql(query);
}

export async function initDatabase() {
  const db = await getDBConnection();
  await createTables(db);
  db.close();
}

export async function insertTask(db, title) {
  const insertQuery = `INSERT INTO task (title) VALUES ('${title}')`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function getTask(db) {
  const tasks = [];
  const results = await db.executeSql("SELECT id, title FROM task");
  results.forEach(function (resultSet) {
    for (let index = 0; index < resultSet.rows.length; index++) {
      tasks.push(resultSet.rows.item(index));
    }
  });
  return tasks;
}
