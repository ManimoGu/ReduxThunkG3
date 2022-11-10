const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.listen(9000, () => console.log("server is running on port 9000..."));

let list = [
  {
    titre: "Coding",
    user: "user1",
  },
  {
    titre: "Eating",
    user: "user2",
  },
  {
    titre: "Reading",
    user: "user1",
  },
  {
    titre: "Writing",
    user: "user2",
  },
];

app.get("/ListTask", (req, res) => {
  res.send(list);
});

app.post("/AddTask", (req, res) => {
  const task = req.body;
  console.log(task)
  list.push(task);
  res.send(list);
});

app.get("/filter", (req, res) => {
  const data = req.query.task;

  const list1 = list.filter((item) => item.titre.includes(data));

  res.send(list1);
});

app.get("/usertasks/:user", (req, res) => {
  const user = req.params.user;

  const list1 = list.filter((item) => item.user === user);

  res.send(list1);
});
