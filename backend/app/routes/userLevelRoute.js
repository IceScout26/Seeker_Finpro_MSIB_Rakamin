const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtMiddleware");
const {
  getUserLevelByIdController,
} = require("../controllers/userLevelController");

router.use(verifyToken("user"));
router.get("/levels/:levelId", getUserLevelByIdController);

module.exports = router;
