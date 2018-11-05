var express = require('express');
var router = express.Router();
import { Conn } from '../db/dbconection'

router.post('/', async function (req, res, next) {
  let habitCon = await Conn('Habit');
  let saved = await habitCon.save({ ...req.body })
  return res.json(saved)
});

router.get('/', async function (req, res, next) {
  let habitCon = await Conn('Habit');
  let saved = await habitCon.find()
  return res.json(saved)
});

module.exports = router;
