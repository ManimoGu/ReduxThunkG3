const {Router} = require("express")

const router = Router()

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

  router.get("/ListTask", (req, res) => {
    res.send(list);
  });
  
  router.post("/AddTask", (req, res) => {
    const task = req.body;
    console.log(task)
    list.push(task);
    res.send(list);
  });
  
  router.get("/filter", (req, res) => {
    const data = req.query.task;
  
    const list1 = list.filter((item) => item.titre.includes(data));
  
    res.send(list1);
  });
  
  router.get("/usertasks/:user", (req, res) => {
    const user = req.params.user;
  
    const list1 = list.filter((item) => item.user === user);
  
    res.send(list1);
  });

  module.exports = router