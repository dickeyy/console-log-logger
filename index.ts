class ConsoleLogLogger {
  log(data: any): void {
    console.log(data);
  }
}

const logger = new ConsoleLogLogger();
logger.log("Hello, console-log-logger!");
