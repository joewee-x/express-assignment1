const admin = (req, res)=> {
    res.status(200).json({
        status : "success",
        message : "Welcome back admin"
    })

};

const user = (req, res) => {
    res.status(200).json({
        status : "success",
        message : "Wecome back user"
    })
}

module.exports = {admin, user};