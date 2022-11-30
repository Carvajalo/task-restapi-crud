import express from "express";
import TaskRoutes from "./routes/task.routes";
import morgan from "morgan";
import cors from "cors";

//Instance
const app = express();

//configuration
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/tasks", TaskRoutes);

export default app;
