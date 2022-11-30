import Tasks from "../models/Tasks";
import { getPagination } from "../libs/getPagination";

export const getTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Tasks.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Somethnig goes wrong while retrieving tasks",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title)
    return res.status(400).send({ message: "Content cannot be empty" });
  try {
    const NewTask = new Tasks({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });
    const taskSaved = await NewTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Somethnig goes wrong while creating task",
    });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tasks.findById(id);
    if (!task)
      return res
        .status(404)
        .json({ message: `Task with id ${id} doesn't exists` });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message:
        error.message ||
        `Somethnig goes wrong while retrieving the task with id: ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskFounded = await Tasks.findByIdAndDelete(id);
    if (!taskFounded) return res.status(204).json();
    res.json({
      message: `Task with ${taskFounded.id} has been deleted`,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message ||
        `Somethnig goes wrong while deleting the task with id: ${id}`,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskUpdated = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.json({
      message: `Task with id: ${taskUpdated.id} was updated `,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Somethnig goes wrong while updating task",
    });
  }
};

export const findDoneTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Somethnig goes wrong while retrieving done tasks",
    });
  }
};

export const findNotDoneTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({ done: false });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Somethnig goes wrong while retrieving not-done tasks",
    });
  }
};
