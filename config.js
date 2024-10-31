require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

module.exports = {
    JWT_secret: secretKey
};
