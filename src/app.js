const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//const authRoute = require('./routes/auth.route');
//const userRoute = require('./routes/user.route');
const master_premisRoute = require('./routes/master_premis.route');
const rkp_entRoute = require('./routes/rkp_ent.route');
const pkmRoute = require('./routes/pkm.route');
const zonRoute = require('./routes/zon.route');
const staffRoute = require('./routes/staff.route');
const staffPremisRoute = require('./routes/staffpremis.route');


const { httpLogStream } = require('./utils/logger');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: httpLogStream }));
app.use(cors());

//app.use('/api/auth', authRoute);
//app.use('/api/user', userRoute);
app.use('/api/master_premis', master_premisRoute);
app.use('/api/rkp_ent', rkp_entRoute);
app.use('/api/pkm', pkmRoute);
app.use('/api/zon', zonRoute);
app.use('/api/staff', staffRoute);
app.use('/api/staff_premis', staffPremisRoute);


app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "API working fine"
        }
    });
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: err.message
    });
    next();
});

module.exports = app;