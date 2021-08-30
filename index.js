const express = require("express");
const usersRoutes = require("./routes/api/users");
const logger = require("./middleware/logger");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", usersRoutes);

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
