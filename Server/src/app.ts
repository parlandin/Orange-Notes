import express, { json } from "express";
import cors from "cors";
import config from "./config";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import verifyToken from "./middlewares/verifyToken.middle";

const app = express();

//configs
const PORT = config.PORT || 3000;
app.use(cors());
app.use(json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
// publicas
app.use(authRoute);

// prividas
app.use(verifyToken);
app.use(userRoute);

app.get("/", async (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`serve on port: ${PORT}`);
});
