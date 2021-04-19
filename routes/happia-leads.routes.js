module.exports = app => {
    const happiaLeads = require("../controllers/happia-leads.controller.js");

    // create a new happia lead
    app.post("/happia", happiaLeads.create);
};