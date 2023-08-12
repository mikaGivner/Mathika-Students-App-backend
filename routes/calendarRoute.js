import express from "express";
import {
  getCalendar,
  createCalendar,
  //   getPlay,
  //   updatePlay,
  //   deletePlay,
} from "../controllers/calendarController.js";

const router = express.Router();
router.route("/").get(getCalendar).post(createCalendar);
//router.route("/:gamePin").get(getPlay).put(updatePlay).delete(deletePlay);

export default router;
