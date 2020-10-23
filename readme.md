How to use.
Once in the main page the user will be able to view upcoming boxing events,
The user can also be an admin and sign up , Once logged in , the user will be able to modify event data.

How to run in local machine.
Copy file into local machine.
Type in npm init in command line in order to get node modules for backend , do the same for frontend.
cd to backend and type npm start in command line.
Modify frontend App.js login buttons to instead of e.g./googleLogin replace with localhost:3000/googleLogin,
cd to frontend and type in npm start after having started backend first.
option will present to change to different port, type in yes or y.

Security.
I have used helmet to help Security, Ideally if this app were meant to be for profit instead of a project,
Only preconfigured users would be able to access and modify the database.

API's used
I used passport Google,github and facebook api to allow users to sign up and log in.

This project was deployed on heroku with the backend and frontend together because that is the way I know to deploy it.
Link:


System Architecture.
This software will be using  the MERN stack the reason for that being that this stack is the one I am most comfortable using and one I believe will be able to create the software sufficiently , I shall be using Mongo DB as the database of the software. Nodejs and Express for the backend of the software and React for the frontend .I will be using Create React App to create the front end of the app .This app shall be styled using  normal CSS, I may at some point use other tools to style this app but at this point I believe the normal CSS is enough to style the app adequately.

Software Description:
This Software allows users to see upcoming Boxing events ,the admins of the website will be able to edit the event information ,delete the event as well add new events for normal end users to see.

 Functional Requirements.
 1.Allow all users to see upcoming boxing events
 2.Allow admins to add a new event
 3.Allow admins to update a specific boxing bout
 4.Allow admins to delete a boxing bout
 5.Allow admins to give info about main card, main card starting time , under card, and poster link
 6.Allow admins to update/delete bout info by bout name
 7.Allow admins to sign in with Facebook , Google or Twitter

 Nonfunctional Requirements.
 1.Must be intuitive or not too complicated to use.
 2.Simple overall UI design
 3.Must be relatively fast to display updated bouts, added bouts and deleted bouts to user
 4.Users can see bouts without signing in
 5.Admins can sign in and edit bouts

 User stories
 1.As a user I want to be able to see upcoming bouts on the main page without signing in
 2.As a admin user I want to be able to add bouts, edit them or delete them

Software Product
This software is intended for boxing enthusiasts who want to quickly view upcoming boxing bouts and unlike other similar software, This one gives a quick summary so users don't have to search to long to find the information they want. For the purpose of this project , anyone is able to sign up as an admin however if I were to release this software as a purchasable product, The admins would be created before hand and access would only be given to them.
