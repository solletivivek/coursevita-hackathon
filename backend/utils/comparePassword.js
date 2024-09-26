const bcrypt = require('bcryptjs');

// Compare the plain-text password with the hashed password
const comparePassword = async (enteredPassword, storedPasswordHash) => {
    return await bcrypt.compare(enteredPassword, storedPasswordHash);
};

module.exports = comparePassword;
