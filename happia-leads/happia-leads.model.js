const sql = require('./../db');

// constructor
const happia_lead = function(lead) {
    this.life_insurance=lead.life_insurance;
    this.gender = lead.gender;
    this.dob = lead.dob;
    this.married = lead.married;
    this.zip_code = lead.zip_code;
    this.first_name = lead.first_name;
    this.last_name = lead.last_name;
    this.email = lead.email;
    this.phone = lead.phone;
    this.utm_source = lead.utm_source;
    this.utm_medium = lead.utm_medium;
    this.utm_term = lead.utm_term;
    this.utm_campaign = lead.utm_campaign;
    this.utm_content = lead.utm_content;
}

happia_lead.create = (newLead, result) => {
    sql.query("INSERT INTO leads SET ?", newLead, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created happia lead: ", { id: res.insertId, ...newLead});
        result(null, { id: res.insertId, ...newLead});
    });
};

module.exports = happia_lead;

