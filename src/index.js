const app = require('./app');
const { logger } = require('./utils/logger');

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    logger.info(`Running on PORT ${PORT}`);
});
