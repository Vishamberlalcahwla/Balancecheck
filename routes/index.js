var express = require("express");
var router = express.Router();
const BalanceCheckController = require("../controllers/BalanceCheckController");
const validation = require("../Validater/validation");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get( "/checkBalance",validation.check_balance_validation,BalanceCheckController.Check_Balance );

module.exports = router;
