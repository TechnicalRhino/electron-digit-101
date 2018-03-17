/**
 * @author Agnibha
 * @createdOn 17 March, 2018
 */

const app = require('express')();
const bodyParser = require('body-parser');
const appConfig = require('../../res/appConfig.json');
global.appConfig = appConfig;

const RegistrationRoute = require('../routes/RegistrationRoute');
const LoginRoute = require('../routes/LoginRoute');
const UserRoute = require('../routes/UserRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/register', RegistrationRoute);
app.use('/login', LoginRoute);
app.use('/user', UserRoute);

app.listen(appConfig.PORT, () => {
    "use strict";
    console.log(`Server Started Successfully at Port => ${appConfig.PORT}`);
});