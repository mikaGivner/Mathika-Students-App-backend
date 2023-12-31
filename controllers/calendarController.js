import importCalendar from "../modules/calendar.js";

export const getCalendar = async (req, res) => {
  try {
    const calendar = await importCalendar.find();
    res.status(200).json({
      success: true,
      data: calendar,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
    console.log("error:", err);
  }
};

export const createCalendar = async (req, res) => {
  try {
    console.log(req.body);
    const calendar = await importCalendar.create(req.body);
    res.status(200).json({
      success: true,
      data: calendar,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
    console.log("error:", err);
  }
};

// export const getPlay = async (req, res) => {
//   try {
//     const play = await importPlays.findOne({ gamePin: req.params.gamePin });
//     if (!play) {
//       throw new Error(`The pin not found`);
//     }
//     res.status(200).json({
//       success: true,
//       data: play,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       error: err.message,
//     });
//     console.log("error:", err);
//   }
// };

// export const updatePlay = async (req, res) => {
//   const play = await importPlays.findOne({ gamePin: req.params.gamePin });
//   if (!play) {
//     res.status(404);
//     throw new Error("play is not found");
//   }
//   const updatedPlay = await importPlays.findOneAndUpdate(
//     { gamePin: req.params.gamePin },
//     req.body,
//     {
//       new: true,
//     }
//   );
//   res.status(200).json(updatedPlay);
// };

// export const deletePlay = async (req, res) => {
//   const play = await importPlays.findById(req.params.id);
//   if (!play) {
//     res.status(404);
//     throw new Error("movie not found");
//   }
//   await importPlays.deleteOne();
//   res.status(200).json(play);
// };
