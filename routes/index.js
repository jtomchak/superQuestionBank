var router = require("express").Router();
const questionsController = require("../controllers/questions.controller");

/* GET home page. */
router.route("/").get(questionsController.get);
module.exports = router;
