var express = require('express');
var router = express.Router();
import { Conn } from '../db/dbconection'

router.post('/', addHabit);
router.get('/', findHabit);

const addHabit = async (req, res) => {
  let habitCon = await Conn('Habit');
  let saved = await habitCon.save({ ...req.body });
  return res.json(saved);
};

const findHabit = async (req, res) => {
  let habitCon = await Conn('Habit');
  let saved = await habitCon.find();
  return res.json(saved);
};

module.exports = router;
