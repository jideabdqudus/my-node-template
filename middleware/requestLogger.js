const morgan = require('morgan');
const logger = require('../utils/logger');

const stream = {
  write: (message) => logger.info(message.trim())
};

const requestLogger = morgan('combined', { stream });

module.exports = requestLogger;