import app from "./app";
import logger from "./util/logger";

const server = app.listen(app.get("port"), () => {
    logger.info("App is running at http://localhost:%d", app.get("port"));
});

export default server;