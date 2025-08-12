const express = require("express");
const router = express.Router();
const trackController = require("../controllers/Track");

router.post("/", trackController.createTrack);

router.get("/", trackController.indexTrack);

router.get("/:id", trackController.showTrack);

router.put("/:id", trackController.updateTrack);

router.delete("/:id", trackController.deleteTrack);


module.exports = router;