import winston, { transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
const { combine, timestamp, json, prettyPrint } = winston.format;

const fileRotateTransport = new DailyRotateFile({
  filename: "./src/logs/server-%DATE%.log",
  datePattern: "DD-MM-YYYY",
  maxFiles: "7d",
});

export const logger = winston.createLogger({
  level: "debug",
  format: combine(timestamp(), json()),
  transports: [
    new transports.Console({
      format: prettyPrint(),
    }),
    fileRotateTransport,
  ],
});

export const morganHTTPLoggerOptions = {
  stream: {
    write: (message: string) => {
      const data = JSON.parse(message);
      logger.http("incoming-request", data);
    },
  },
};
