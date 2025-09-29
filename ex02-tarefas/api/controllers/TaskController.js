import { Task } from "../models/Task.js";
import { v4 as uuidv4 } from "uuid";

const tasksList = [];

const fetchAllTasks = (req, res) => {
    return res.send(tasksList);
};

const findTaskById = (req, res) => {
    const { id } = req.params;
    const foundTask = tasksList.find(item => item.id === id);
    if (!foundTask) {
        return res.status(404).send({ message: "Task not found" });
    }
    return res.send(foundTask);
}

const addNewTask = (req, res) => {
    if (!req.body.description) {
        return res.status(400).send({ message: "Description is required" });
    }
    
    const createdTask = new Task(uuidv4(), req.body.description, req.body.completed || false);
    tasksList.push(createdTask);
    return res.status(201).send(createdTask);
}

const modifyTask = (req, res) => {
    const { id } = req.params;
    const taskPosition = tasksList.findIndex(item => item.id === id);
    if (taskPosition === -1) {
        return res.status(404).send({ message: "Task not found" });
    }
    const modifiedTask = { ...tasksList[taskPosition], ...req.body };
    tasksList[taskPosition] = modifiedTask;
    return res.send(modifiedTask);
}

const removeTask = (req, res) => {
    const { id } = req.params;
    const taskPosition = tasksList.findIndex(item => item.id === id);
    if (taskPosition === -1) {
        return res.status(404).send({ message: "Task not found" });
    }
    tasksList.splice(taskPosition, 1);
    return res.status(204).send();
}

export { fetchAllTasks, addNewTask, findTaskById, modifyTask, removeTask };
