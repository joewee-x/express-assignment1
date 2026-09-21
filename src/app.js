const express = require("express");
const app = express();
app.use(express.json());
const userRoute = require("./routes/user.route");
const role = require("./routes/role.route");
const productRoute = require("./routes/product.route");

app.get("/", (req, res) => {
    res.status(200).json({
        "satatus" : "successful",
        "message" : "backend API is runningg"
    });
});

app.use("/user", userRoute);
app.use("/role", role);
app.use("/product", productRoute);

module.exports = app;