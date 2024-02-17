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
const problem_categoryRoute = require('./routes/problem_category.route');
const project_keuanganRoute = require('./routes/project_keuangan.route');

const userroleRoute = require('./routes/userrole.route');

//warteg 
const OutletRoute = require('./routes/outlet.route');
const PengelolaRoute = require('./routes/pengelola.route');
const InvestorRoute = require('./routes/investor.route');
const PeriodeRoute = require('./routes/periode.route');
const ItemOperationRoute = require('./routes/itemoperation.route');
const ItemPendapatanRoute = require('./routes/itempendapatan.route');
const ItemBelanjaRoute = require('./routes/itembelanja.route');
const KeuanganRoute = require('./routes/keuangan.route');
const OperationRoute = require('./routes/operation.route');
const PerbelanjaanRoute = require('./routes/perbelanjaan.route');
const SettingRoute = require('./routes/setting.route');


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
app.use('/api/problem_category', problem_categoryRoute);
app.use('/api/project_keuangan', project_keuanganRoute);

app.use('/api/userrole', userroleRoute);

app.use('/api/tariff', tariffRoute);
app.use('/api/driver', driverRoute);
app.use('/api/reservation', reservationRoute);


//warteg
app.use('/api/outlet', OutletRoute);
app.use('/api/pengelola', PengelolaRoute);
app.use('/api/investor', InvestorRoute);
app.use('/api/periode', PeriodeRoute);

app.use('/api/itemoperation', ItemOperationRoute);
app.use('/api/itempendapatan', ItemPendapatanRoute);
app.use('/api/itembelanja', ItemBelanjaRoute);

app.use('/api/keuangan', KeuanganRoute);

app.use('/api/keuangan/operation/outlet/', OperationRoute);
app.use('/api/perbelanjaan', PerbelanjaanRoute);
app.use('/api/operation', OperationRoute);

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