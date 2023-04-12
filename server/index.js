import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(async (error, _, res, next) => {
  if (error) return res.status(500).json({ message: error.message });
  return next();
});

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
