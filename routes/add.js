const User = require('../models/user.model.js');
const router = require('express').Router();


const authCheck = ((req, res, next) => {
    if (!req.user) {
        //if user not logged in
        res.redirect('/');
    } else {

        const eventName = req.params.eventName;
        const date = req.params.date;
        const time = req.params.time;




        const newEventCreation = {
            event: eventName,
            date: date,
            time: time,



        }

        User.updateOne({

        }, {
            $push: {
                events: newEventCreation
            }
        }, function(err, doc) {
            if (err) {
                console.log("Something wrong when adding data!");

            } else {


                console.log("event added");
            }
        });


    }


});

router.get('/add/:eventName/:date/:time', authCheck, (req, res) => {


});
module.exports = router;
