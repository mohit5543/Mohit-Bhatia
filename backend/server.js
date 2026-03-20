const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public")); //  important
app.use(cors());
app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});