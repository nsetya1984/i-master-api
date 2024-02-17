const app = require('./app');
const { logger } = require('./utils/logger');

const PORT = process.env.PORT || 200;

app.listen(PORT, () => {
    logger.info(`Running on PORT ${PORT}`);
});
