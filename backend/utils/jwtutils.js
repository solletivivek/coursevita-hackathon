const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Function to generate a JWT token
function generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, secretKey, { expiresIn });
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

// Function to decode a JWT token without verifying
function decodeToken(token) {
    return jwt.decode(token);
}

module.exports = {
    generateToken,
    verifyToken,
    decodeToken
};