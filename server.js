import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import connectDB from "./config/db.js";
import newCalendar from "./routes/calendarRoute.js";

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/v1/newCalendar", newCalendar);
if (process.env.NODE_ENV !== `production`) {
  app.use(morgan(`dev`));
}
// app.get(`/http://localhost:5173/api`, (req, res) =>
//   res.send("server is running now!")
// );
app.get(`/`, (req, res) => res.send("server is running now!"));
const buildServer = http.createServer(app);
const PORT = process.env.PORT || 5173;
buildServer.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
