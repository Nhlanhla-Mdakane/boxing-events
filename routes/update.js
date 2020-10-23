const User = require('../models/user.model.js');
const router = require('express').Router();


const authCheck = ((req, res, next) => {
    if (!req.user) {
        //if user not logged in
        res.redirect('/');
    } else {

        const eventName = req.params.eventName;
        const newEvent = req.params.newEvent;
        const date = req.params.date;
        const time = req.params.time;



        /*
these functions remove the event the user entered and insert a new event in it's place thereby updating it
    */

        User.findOneAndUpdate({

        }, {
            $pull: {
                events: {
                    event: eventName
                }
            }
        }, function(err) {
            if (err) {
                console.log("could not update");
            }

        });

        const newEventCreation = {
            event: newEvent,
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
                console.log("Something went wrong");

            } else {


                console.log("updated succesfully");
            }
        });



    }


});

router.get('/update/:eventName/:newEvent/:date/:time', authCheck, (req, res) => {


});
module.exports = router;
