import express from "express";
import "dotenv/config";
import cors from "cors"
import taskRoutes from "./routes/TasksRoute.js";

const serverApp = express();

serverApp.set("trust proxy", true);

serverApp.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

serverApp.use((request, response, nextMiddleware) => {
  console.log(`${request.method} ${request.path} - ${request.ip}`);
  nextMiddleware();
});

serverApp.use(express.json());
serverApp.use(express.urlencoded({ extended: true }))

serverApp.use("/", taskRoutes);

const serverPort = process.env.PORT || 3000;
serverApp.listen(serverPort, () => {
    console.log(`Application server running on port ${serverPort}`);
})
