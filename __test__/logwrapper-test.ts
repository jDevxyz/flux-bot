import {LogWrapper} from "../src/cluster/LogWrapper";

const logger = new LogWrapper().logger;

logger.log("info", "Found nothing at %s. Test were done at %s", "Logging Test", new Date());
logger.info("Still sending info through test logging");
logger.warn("Creating a fake warn", new Error("Frick this error, bech"));
logger.error("This is an error", new Error("Definitely a genuine error"));