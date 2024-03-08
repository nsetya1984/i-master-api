const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoute = require('./routes/auth.route');

const tariffRoute = require('./routes/tariff.route');
const driverRoute = require('./routes/driver.route');
const reservationRoute = require('./routes/reservation.route');

const userRoute = require('./routes/user.route');
const zonRoute = require('./routes/zon.route');
const project_categoryRoute = require('./routes/project_category.route');
const project_premisRoute = require('./routes/project_premis.route');
const project_problemRoute = require('./routes/project_problem.route');
const project_hutangRoute = require('./routes/project_hutang.route');
const Project_hutang_problemRoute = require('./routes/project_hutang_problem.route');
const project_hutang_keuanganRoute = require('./routes/project_hutang_keuangan.route');

const problem_categoryRoute = require('./routes/problem_category.route');
const project_keuanganRoute = require('./routes/project_keuangan.route');
const userroleRoute = require('./routes/userrole.route');

//warteg 


const { httpLogStream } = require('./utils/logger');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: httpLogStream }));
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/zons', zonRoute);
app.use('/api/project_category', project_categoryRoute);
app.use('/api/project_premis', project_premisRoute);
app.use('/api/project_problem', project_problemRoute);
app.use('/api/project_hutang', project_hutangRoute);
app.use('/api/Project_hutang_problem', Project_hutang_problemRoute);

app.use('/api/problem_category', problem_categoryRoute);
app.use('/api/project_keuangan', project_keuanganRoute);
app.use('/api/project_hutang_keuangan', project_hutang_keuanganRoute);


app.use('/api/userrole', userroleRoute);
app.use('/api/setting', SettingRoute);


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