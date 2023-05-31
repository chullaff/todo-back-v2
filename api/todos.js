const express = require("express");
const router = express.Router();
const todo_v2 = require("../database/models/todo_v2.model");

// получение списка со всеми todo
router.get("/", async (_, res) => {
  try {
    const todoList = await todo_v2.findAll();
    res.status(200).json({ todoList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// получение todo по id
router.get("/:id", async (req, res) => {
  try {
    const todo = await todo_v2.findByPk(req.params.id);
    if (todo === null) {
      res.status(404).json({ message: "Not found!" });
    } else {
      res.status(200).json({ todo });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// создание todo
router.post("/", async (req, res) => {
  try {
    const todo = await todo_v2.create({
      title: req.body.title,
      description: req.body.description,
      // isDone: req.body.isDone,
    });
    res.status(200).json({ message: "создана новая todo" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// редактироваание todo по id
router.patch("/:id", async (req, res) => {
  try {
    const todo = await todo_v2.findByPk(req.params.id);
    if (todo === null) {
      res.status(404).json({ message: "Not found!" });
    } else {
      await todo.update({
        title: req.body.title,
        description: req.body.description,
        // isDone: req.body.isDone,
      });
      res.status(200).json({ message: "todo была отредактирована" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// удаление todo по id
router.delete("/:id", async (req, res) => {
  try {
    const todo = await todo_v2.findByPk(req.params.id);
    if (todo === null) {
      res.status(404).json({ message: "Not found!" });
    } else {
      await todo.destroy();
      res.status(200).json({ message: "todo была удалена" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// удаление всех todo
router.delete("/", async (_, res) => {
  try {
    await todo_v2.destroy({
      where: {},
    });
    res.status(200).json({ message: "все todo были удалены" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
