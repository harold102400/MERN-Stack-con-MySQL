import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createdAt ASC"
  );
  console.log(result);
  res.json(result);
};

export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  if (result.length == 0)
  return res.status(404).json({ message: "Task not found"});
  res.json(result);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [response] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({
    id: response.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("updating the task");
};

export const deleteTask = (req, res) => {
  res.send("deleting the task");
};
