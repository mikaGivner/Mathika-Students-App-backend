import mongoose from "mongoose";
const calendarSchema = new mongoose.Schema({
  //   year: {
  //     type: {
  //       month: {
  //         type: {
  //           day: {
  //             type: [[String]],
  //           },
  //         },
  //       },
  //     },
  //   },
  year: {
    type: Number,
  },

  month: {
    type: String,
  },
  day: {
    type: String,
  },
  lessons: {
    type: [[String]],
  },
});
export default mongoose.model("calendar", calendarSchema);
