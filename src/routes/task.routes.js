import { Router } from "express";

import * as tasksController from "../controllers/task.controllers";

const router = Router();

router.get("/", tasksController.getTasks);

router.post("/", tasksController.createTask);

router.get("/done", tasksController.findDoneTasks);

router.get("/notdone", tasksController.findNotDoneTasks);

router.get("/:id", tasksController.getTask);

router.delete("/:id", tasksController.deleteTask);

router.put("/:id", tasksController.updateTask);

export default router;
