const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization (Fixed)
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);




// ==========================================
// GET ALL FILES
// ==========================================

const getFiles = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('project_files')
      .select('*')
      .order('created_at', { ascending: true });




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    const formattedFiles = data.map(file => ({

      id: file.id,

      fileName: file.file_name || file.fileName,

      fileUrl: file.file_url || file.fileUrl || "",

      uploadedBy: file.uploaded_by || file.uploadedBy || "Unknown",

      version: file.version || 1,

      isFinal: file.is_final !== undefined ? file.is_final : file.isFinal,

      uploadedAt: file.created_at || file.uploadedAt

    }));




    res.json({

      success: true,

      files: formattedFiles

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ==========================================
// ADD FINAL FILE
// ==========================================

const addFile = async (req, res) => {

  try {

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




    const { data, error } = await supabase
      .from('project_files')
      .insert([
        {
          file_name: fileName,

          file_url: fileUrl || "",

          uploaded_by: uploadedBy || "Unknown",

          version: version || 1,

          is_final: true
        }
      ])
      .select();




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    const insertedFile = data[0];




    const newFile = {

      id: insertedFile.id,

      fileName: insertedFile.file_name || insertedFile.fileName,

      fileUrl: insertedFile.file_url || insertedFile.fileUrl,

      uploadedBy: insertedFile.uploaded_by || insertedFile.uploadedBy,

      version: insertedFile.version,

      isFinal: insertedFile.is_final !== undefined ? insertedFile.is_final : insertedFile.isFinal,

      uploadedAt: insertedFile.created_at || new Date().toISOString()

    };




    res.status(201).json({

      success: true,

      message: "Final file added successfully",

      file: newFile

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ==========================================
// UPDATE FINAL FILE
// ==========================================

const updateFile = async (req, res) => {

  try {

    const id = req.params.id;




    const {
      fileName,
      fileUrl,
      uploadedBy,
      version,
      isFinal
    } = req.body;




    const updates = {};




    if (fileName !== undefined) {
      updates.file_name = fileName;
    }

    if (fileUrl !== undefined) {
      updates.file_url = fileUrl;
    }

    if (uploadedBy !== undefined) {
      updates.uploaded_by = uploadedBy;
    }

    if (version !== undefined) {
      updates.version = version;
    }

    if (isFinal !== undefined) {
      updates.is_final = isFinal;
    }




    updates.updated_at = new Date().toISOString();




    const { data, error } = await supabase
      .from('project_files')
      .update(updates)
      .eq('id', id)
      .select();




    if (error || !data || data.length === 0) {

      return res.status(404).json({

        success: false,

        message: "File not found"

      });

    }




    const updatedItem = data[0];




    const updatedFile = {

      id: updatedItem.id,

      fileName: updatedItem.file_name || updatedItem.fileName,

      fileUrl: updatedItem.file_url || updatedItem.fileUrl,

      uploadedBy: updatedItem.uploaded_by || updatedItem.uploadedBy,

      version: updatedItem.version,

      isFinal: updatedItem.is_final !== undefined ? updatedItem.is_final : updatedItem.isFinal,

      updatedAt: updatedItem.updated_at

    };




    res.json({

      success: true,

      message: "Final file updated successfully",

      file: updatedFile

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ==========================================
// DELETE FINAL FILE
// ==========================================

const deleteFile = async (req, res) => {

  try {

    const id = req.params.id;




    const { data, error } = await supabase
      .from('project_files')
      .delete()
      .eq('id', id)
      .select();




    if (error || !data || data.length === 0) {

      return res.status(404).json({

        success: false,

        message: "File not found"

      });

    }




    const deletedItem = data[0];




    const deletedFile = {

      id: deletedItem.id,

      fileName: deletedItem.file_name || deletedItem.fileName,

      fileUrl: deletedItem.file_url || deletedItem.fileUrl,

      uploadedBy: deletedItem.uploaded_by || deletedItem.uploadedBy,

      version: deletedItem.version,

      isFinal: deletedItem.is_final !== undefined ? deletedItem.is_final : deletedItem.isFinal

    };




    res.json({

      success: true,

      message: "Final file deleted successfully",

      file: deletedFile

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ==========================================
// EXPORT
// ==========================================

module.exports = {

  getFiles,

  addFile,

  updateFile,

  deleteFile

};