const express = require("express");
const cors = require("cors");
const { initDB } = require("./database");
const routerTodo = require("./api/todos");

const app = express();
const port = 3100;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req, _, next) => {
//   console.log("url = ", req.url);
//   console.log("method = ", req.method);
//   console.log("host = ", req.headers.host);
//   console.log("body = ", req.body);
//   console.log("query = ", req.query);
// });

app.use("/todos", routerTodo);

app.listen(port, () => {
  console.log(`server is working on port ${port}`);
});

initDB();
