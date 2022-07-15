const { createProxyMiddleware } = require("http-proxy-middelware");
module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://35.155.225.146",
            chageOrigin: true,
        })
    );
};
