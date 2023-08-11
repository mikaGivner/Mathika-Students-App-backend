import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
const app = express();
app.get(`/https://extinct-bat-rugby-shirt.cyclic.app/`, (req, res) =>
  res.json({ message: "Server is running now!" })
);
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
