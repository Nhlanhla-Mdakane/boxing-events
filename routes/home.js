const router = require('express').Router();
const User = require('../models/user.model.js');


const authCheck = ((req, res, next) => {
    if (!req.user) {

        /*
  this function sends back data to frontend and since user is not logged in , it gives a logvalue of 1 which in the front end means
  that the admin section should be hidden
    */
        User.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({
                    message: "Some error occurred while retrieving data."
                });
            } else {

                let eventArray = [];

                let finalArray = [];
                /*
this gets the event object specifically
    */
                for (var i = 0; i < data.length; i++) {

                    let eventDataArray = data[i].events

                    for (var i = 0; i < eventDataArray.length; i++) {
                        eventArray.push(eventDataArray[i]);
                    }
                }

                for (var i = 0; i < eventArray.length; i++) {
                    let eventNametester = eventArray[i].event;
                    if (eventNametester === "undefined") {

                    } else {
                        finalArray.push(eventArray[i]);
                    }

                }

                console.log(eventArray[1].event);

                console.log(finalArray);

                res.send({
                    "data": eventArray,
                    "logValue": 1
                });

            }

        });

    } else {

        /*
  this function sends back data to frontend and since user is logged in , it gives a logvalue of 0 which in the front end means
  that the admin section should be displayed
    */

        User.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({
                    message: "Some error occurred while retrieving data."
                });
            } else {



                let eventArray = [];

                let finalArray = [];
                /*
this gets the event object specifically
   */

                for (var i = 0; i < data.length; i++) {

                    let eventDataArray = data[i].events

                    for (var i = 0; i < eventDataArray.length; i++) {
                        eventArray.push(eventDataArray[i]);
                    }
                }


                console.log(req.user.username);


                console.log(eventArray);

                res.send({
                    "data": eventArray,
                    "logValue": 0
                });

            }
        });
    }


});


router.get('/home', authCheck, (req, res) => {

});

module.exports = router;
