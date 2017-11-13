const router = require("express").Router();
const newsRoutes = require("./news");

// new routes
router.use("/news", newsRoutes);

module.exports = router;
