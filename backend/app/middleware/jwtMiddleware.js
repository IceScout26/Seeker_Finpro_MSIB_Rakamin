const jwt = require('jsonwebtoken');

function signToken(data) {
  const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

//cara pemakaian --> app.use('/', verifyToken(['user']), userRouter);
function verifyToken(role) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"]; 
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      if (role && decoded.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      req.accountId = decoded.accountId; // dipakai seperti ini di route --> const userId = req.accountId;
      next();
    });
  };
}

module.exports = { signToken, verifyToken };
