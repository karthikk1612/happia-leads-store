const happia_lead = require("./../happia-leads/happia-leads.model");

exports.create = (req, res) => {
    //validate request here !!
    if (!req.body && Object.keys(req.body).length !== 15) {
        res.status(400).send({
            message: "invalid format ...."
        });
    }

    //creating happia_lead
    const happiaLead = new happia_lead({
        life_insurance:req.body.life_insurance,
        gender:req.body.gender,
        dob:req.body.dob,
        married:req.body.married,
        zip_code:req.body.zip_code,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        utm_source:req.body.utm_source,
        utm_medium:req.body.utm_medium,
        utm_term:req.body.utm_term,
        utm_campaign:req.body.utm_campaign,
        utm_content:req.body.utm_content
    });

    let allowedHosts = ['happia.com', 'localhost', '35.236.5.140','happia-landing-page.herokuapp.com','35.222.235.9','happia-leads-store-service-6mxt3yp32q-uc.a.run.app'];
    let host = req.get('host');
    let validHost = false;

    console.log('this is the host => ', host);

    allowedHosts.forEach((eachHost, index) => {
        host.includes(eachHost) && (validHost = true);

        if (index === allowedHosts.length - 1) {
            console.log('index equals allowedHosts length')
            if (validHost) {
                console.log('VALID HOST')
                happia_lead.create(happiaLead, (err, data) => {
                    if (err) {
                        res.status(500).send({
                            message: err.message || "Some error occured while creating the lead !"
                        }); 
                    } else {
                        res.send(data);
                    }
                });
            } else {
                res.status(400).send({
                    host:host,
                    message: "FORBIDDEN !"
                })
            }
        }
    });

}