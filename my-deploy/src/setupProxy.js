const { createProxyMiddleware } = require("http-proxy-middelware");
module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:8080",
            chageOrigin: true,
        })
    );
};
