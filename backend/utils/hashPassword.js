const bcrypt = require('bcryptjs');

// Hash password before saving to database
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

module.exports = hashPassword;
