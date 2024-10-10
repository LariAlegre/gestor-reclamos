import validateContentType from "./middleware/validateContentType.js";
import initModules from "./module/module.js";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initModules(app);

app.listen(PORT);
console.log(`Listening on port ${PORT}`);