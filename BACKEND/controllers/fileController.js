const { files } = require("../data/temporaryData");


// GET ALL FILES

const getFiles = (req, res) => {

  res.json({
    success: true,
    files: files
  });

};


// ADD FINAL FILE

const addFile = (req, res) => {

  const {
    fileName,
    fileUrl,
    uploadedBy,
    version
  } = req.body;


  if (!fileName) {

    return res.status(400).json({
      success: false,
      message: "File name is required"
    });

  }


  const newFile = {

    id: Date.now(),

    fileName: fileName,

    fileUrl: fileUrl || "",

    uploadedBy: uploadedBy || "Unknown",

    version: version || 1,

    isFinal: true,

    uploadedAt: new Date().toISOString()

  };


  files.push(newFile);


  res.status(201).json({

    success: true,

    message: "Final file added successfully",

    file: newFile

  });

};


// UPDATE FINAL FILE

const updateFile = (req, res) => {

  const id = Number(req.params.id);

  const file = files.find(
    (file) => file.id === id
  );


  if (!file) {

    return res.status(404).json({
      success: false,
      message: "File not found"
    });

  }


  const {
    fileName,
    fileUrl,
    uploadedBy,
    version,
    isFinal
  } = req.body;


  if (fileName !== undefined) {
    file.fileName = fileName;
  }

  if (fileUrl !== undefined) {
    file.fileUrl = fileUrl;
  }

  if (uploadedBy !== undefined) {
    file.uploadedBy = uploadedBy;
  }

  if (version !== undefined) {
    file.version = version;
  }

  if (isFinal !== undefined) {
    file.isFinal = isFinal;
  }


  file.updatedAt = new Date().toISOString();


  res.json({

    success: true,

    message: "Final file updated successfully",

    file: file

  });

};


// DELETE FINAL FILE

const deleteFile = (req, res) => {

  const id = Number(req.params.id);

  const index = files.findIndex(
    (file) => file.id === id
  );


  if (index === -1) {

    return res.status(404).json({
      success: false,
      message: "File not found"
    });

  }


  const deletedFile = files.splice(index, 1);


  res.json({

    success: true,

    message: "Final file deleted successfully",

    file: deletedFile[0]

  });

};


module.exports = {

  getFiles,

  addFile,

  updateFile,

  deleteFile

};