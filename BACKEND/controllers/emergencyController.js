const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Direct Supabase Initialization (Fixed)
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);




// ===============================
// GET EMERGENCY STATUS
// ===============================

const getEmergencyStatus = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('project_state')
      .select('emergency_active, panic_active')
      .eq('state_name', 'KUET PARADOX')
      .single();




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    res.json({

      success: true,

      emergencyMode: data ? data.emergency_active : false,

      panicActive: data ? data.panic_active : false

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ===============================
// ACTIVATE EMERGENCY MODE
// ===============================

const activateEmergency = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('project_state')
      .update({
        emergency_active: true,
        updated_at: new Date().toISOString()
      })
      .eq('state_name', 'KUET PARADOX')
      .select()
      .single();




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    res.json({

      success: true,

      message: "Emergency Mode activated",

      emergencyMode: data.emergency_active,

      panicActive: data.panic_active

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ===============================
// DEACTIVATE EMERGENCY MODE
// ===============================

const deactivateEmergency = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('project_state')
      .update({
        emergency_active: false,
        panic_active: false,
        updated_at: new Date().toISOString()
      })
      .eq('state_name', 'KUET PARADOX')
      .select()
      .single();




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    res.json({

      success: true,

      message: "Emergency Mode deactivated",

      emergencyMode: data.emergency_active,

      panicActive: data.panic_active

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ===============================
// TEAM PANIC BUTTON
// ===============================

const triggerPanic = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from('project_state')
      .update({
        emergency_active: true,
        panic_active: true,
        updated_at: new Date().toISOString()
      })
      .eq('state_name', 'KUET PARADOX')
      .select()
      .single();




    if (error) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }




    res.json({

      success: true,

      message: "TEAM PANIC activated",

      emergencyMode: data.emergency_active,

      panicActive: data.panic_active

    });




  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};




// ===============================
// EXPORT FUNCTIONS
// ===============================

module.exports = {

  getEmergencyStatus,

  activateEmergency,

  deactivateEmergency,

  triggerPanic

};