const express = require("express");

const router = express.Router();

const {
  getFiles,
  addFile,
  updateFile,
  deleteFile
} = require("../controllers/fileController");

router.get("/", getFiles);

router.post("/", addFile);

router.put("/:id", updateFile);

router.delete("/:id", deleteFile);

module.exports = router;