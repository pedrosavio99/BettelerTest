
require("dotenv").config();  // esse arquivo possibilita a criação de variaveis de ambiente 
const express = require("express"); // esse fremework do node permite gerenciar requisições da arquitetura http(get post, put e delete)
const app = express();
const cors = require("cors"); // permite nossa aplicação rodar em dominios espeificados no desenvolvimento
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// conexão com o nosso banco de dados
connection();

// middlewares  são os intemediarios entre backand e frontand
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));