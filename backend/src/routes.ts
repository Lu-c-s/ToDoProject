import { Router } from "express";
import ToDoController from "./controllers/toDoController";

const routes = Router();

routes.get("/todos", ToDoController.list);
routes.get("/todos/length", ToDoController.getToDoLength);
routes.get("/todos/:id", ToDoController.findById);
routes.post("/todos", ToDoController.create);
routes.put("/todos", ToDoController.update);
routes.delete("/todos/:id", ToDoController.delete);

export default routes;
