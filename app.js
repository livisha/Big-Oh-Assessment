const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", userRoutes);
app.use("/", formRoutes);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
