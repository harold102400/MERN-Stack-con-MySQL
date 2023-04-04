import { pool } from '../db.js';

export const getTasks = (req, res) => {
    res.send('getting tasks')
}

export const getTask = (req, res) => {
    res.send('getting a task')
}

export const createTask = async (req, res) => {
    const {title, description} = req.body
    const [response] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [title, description])
    res.json({
        id: response.insertId,
        title,
        description,
    });
}

export const updateTask = (req, res) => {
    res.send('updating the task')
}

export const deleteTask = (req, res) => {
    res.send('deleting the task')
}