"use strict";
class ConsoleLogLogger {
    log(data) {
        console.log(data);
    }
}
const logger = new ConsoleLogLogger();
logger.log("Hello, console-log-logger!");
