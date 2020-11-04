import { Request, Response } from "express";
import ToDoService from "../services/ToDoService";

const toDoService = new ToDoService();

export default {
  async list(req: Request, res: Response) {
    let toDoList = toDoService.listAllToDo();
    res.json(toDoList);
  },
  async findById(req: Request, res: Response) {
    let { id } = req.params;
    let toDo = toDoService.findToDoById(Number(id));

    res.json(toDo);
  },
  async create(req: Request, res: Response) {
    try {
      toDoService.addTodo({ todo: req.body });
      res.status(200).json();
    } catch (err) {
      console.error(err);
    }
  },
  async update(req: Request, res: Response) {
    try {
      let { id, ...todo } = req.body;
      toDoService.updateTodo(id, todo);
      res.status(200).json(todo);
    } catch (err) {
      console.error(err);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      let { id } = req.params;
      toDoService.deleteToDo(Number(id));

      res.status(200).json();
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  async getToDoLength(req: Request, res: Response) {
    let toDoLength = toDoService.getToDosLength();
    res.json(toDoLength);
  },
};
