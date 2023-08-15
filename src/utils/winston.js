import winston from "winston";
import "winston-daily-rotate-file";
const { combine, timestamp, json, prettyPrint } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: "./src/logs/server-%DATE%.log",
  datePattern: "DD-MM-YYYY",
  maxFiles: "7d",
});

export const logger = winston.createLogger({
  level: "debug",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console({
      format: prettyPrint(),
    }),
    fileRotateTransport,
  ],
});

export const morganFormatter = function (tokens, req, res) {
  const metrics = JSON.stringify({
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    user: req.user?.id,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    status: Number.parseFloat(tokens.status(req, res)),
    content_length: tokens.res(req, res, "content-length"),
    response_time: Number.parseFloat(tokens["response-time"](req, res)),
  });
  return metrics;
};

export const morganHTTPLoggerOptions = {
  stream: {
    write: (message) => {
      const data = JSON.parse(message);
      logger.http("incoming-request", data);
    },
  },
};
