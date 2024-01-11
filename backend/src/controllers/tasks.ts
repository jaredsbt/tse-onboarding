import { RequestHandler } from "express";
import TaskModel from "src/models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = TaskModel.find({});
    const sortedTasks = await tasks.sort({ dateCreated: "desc" });

    res.status(200).json(sortedTasks);
  } catch (error) {
    next(error);
  }
};
