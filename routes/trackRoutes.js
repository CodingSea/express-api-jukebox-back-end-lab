const express = require("express");
const router = express.Router();
const trackController = require("../controllers/Track");

router.post("/new", trackController.createTrack);

router.post("/", trackController.indexTrack);

router.post("/:id", trackController.showTrack);

router.put("/:id", trackController.updateTrack);

router.delete("/:id", trackController.deleteTrack);


module.exports = router;