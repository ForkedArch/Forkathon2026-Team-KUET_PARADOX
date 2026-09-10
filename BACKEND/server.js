// 1. Import dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

// 2. Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// 3. Middleware (This allows your frontend to talk to your backend)
app.use(cors());
app.use(express.json());

// 4. Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// ⚠️ IMPORTANT: You must create a file named exactly ".env" in this BACKEND folder
// and add your SUPABASE_URL and SUPABASE_ANON_KEY there for this to work.
const supabase = createClient(supabaseUrl, supabaseKey); 

// 5. Basic Test Route (Combined into one JSON response)
app.get("/", (req, res) => {
    res.json({
        message: "KUET PARADOX backend is running successfully!",
        status: "Active",
        timestamp: new Date().toISOString()
    });
});

// 6. Start the server (Only ONE of these at the bottom!)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});