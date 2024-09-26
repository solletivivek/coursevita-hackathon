const { verifyToken } = require('../utils/jwtutils');

const auth = (req, res, next) => {
    // Get the token from the header
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ msg: 'Invalid token' });
        }
        // Add user info from payload to the request
        req.userId = decoded.userId;
        next();  // Move to the next middleware or controller
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};

module.exports = auth;