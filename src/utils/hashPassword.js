require("dotenv");
const bcrypt = require("bcrypt");



const hashPassword = async(password) => {
    const salt = Number(process.env.SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
};

const comparePassword = async (hashedPassword, password) => {
    return await bcrypt.compare(hashedPassword, password)
}
module.exports = {hashPassword, comparePassword};