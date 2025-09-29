import Router from "express";
import { fetchAllTasks, addNewTask, findTaskById, removeTask, modifyTask } from "../controllers/TaskController.js";

const apiRouter = Router();

apiRouter.get("/tarefas", fetchAllTasks);
apiRouter.post("/tarefas", addNewTask);
apiRouter.get("/tarefas/:id", findTaskById);
apiRouter.delete("/tarefas/:id", removeTask);
apiRouter.put("/tarefas/:id", modifyTask);

export default apiRouter;
