import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import maquinaRouter from "./routes/maquinas.routes.js";
import usuarioRouter from "./routes/usuarios.routes.js";

config();
const app = express();

app.use(cors());           
app.use(express.json());  
app.use(morgan("dev"));   

await connectDB();

app.use("/api/maquinas", maquinaRouter);
app.use("/api/usuarios", usuarioRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
