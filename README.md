# AP-Assignment-No-02

This is the CRUD Application maintaining the Product Details using Express.js, Node.js and MongoDB on the Cloud(Atlas). The signIn/signUp forms are implemented using the passport.js for authentication. 


/*** Product Management System ***/

How to run the files....
Run by typing the following command in cmd to run the server: node app.js

Package.json
To run the application install the following modules through npm:

 {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "bootstrap": "^4.3.1",
    "connect-flash": "^0.1.1",
    "consolidate": "^0.15.1",
    "cookie-parser": "^1.4.4",
    "ejs": "^2.7.1",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "express-handlebars": "^3.1.0",
    "express-session": "^1.17.0",
    "handlebars": "^4.4.5",
    "hbs": "^4.0.6",
    "jquery": "^3.4.1",
    "mongo": "^0.1.0",
    "mongodb": "^3.3.3",
    "mongoose": "^5.7.5",
    "multer": "^1.4.2",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0"
  }

How the application is structured:

The application is developed using the MVC Model to model the application.
The app consists of the following folders:
model -->> Contains the Database part
views -->> Contains the view part of the app using the EJS Templating engine
Controller -->> The controller part is present in the routes folder where the routes and database queries are present.

Important Features >>>

1. User authentication using the passport.js and form validation
2. User authorization making sure that unauthorized user or unregistered user should not be able to access the dashboard resource..
3. User password encryption using the bcrypt...
4. Using MongoDb to store the users and products data...
5. Using MongoDb atlas instead of local database which can be accessed using the MongoDb string URI
6. Using Passport.js to make a local strategy for the user authentication 
7. Best User interface to show the flash messages and perfect response if he/she is not registered or has entered the wrong password...
8. CRUD functionality is defined....
9. Separate entities as sellers and buyers..
10.Anyone can access the database using the login and password because the database is made on Atlas Cloud by making a cluster...
11.Admin can add users and assign roles as sellers and Buyers and can assign roles...

Important files >>

app.js >> Base file for running the code and basic setup for flash messages,view engine,express sessions,connecting to database and user authorization
by calling the passport file, routes middleware functions

index.js >> Database controller part

user.js >> code for user's form validation including login,register and password encryption using the bcrypt.js and user authorization

User.js >> User schema is defined

auth.js >> user authorization code

passport.js >> local strategy is defined for passport authorization

key.js >> MongoDb URI is defined

MongoURI: 'mongodb+srv://Nouman:<password>@cluster0-asdku.mongodb.net/test?retryWrites=true&w=majority'
