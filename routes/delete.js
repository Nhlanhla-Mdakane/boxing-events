const User = require('../models/user.model.js');
const router = require('express').Router();

const authCheck = ((req, res, next) => {
    if (!req.user) {
        //if user not logged in
        res.redirect('/');
    } else {

        const eventName = req.params.eventName;

        /*
this function removes event selected by user
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
                console.log("could not delete");
            }
            console.log("event deleted");
        });




    }


});




router.get('/delete/:eventName', authCheck, (req, res) => {


});
module.exports = router;
