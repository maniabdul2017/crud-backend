import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./route/route.js";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);

const URL = `mongodb+srv://mani:mani2017@crudd.ptu8h.mongodb.net/CRUD?retryWrites=true&w=majority`;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // we need .then becausew
    //it returns a promise
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
