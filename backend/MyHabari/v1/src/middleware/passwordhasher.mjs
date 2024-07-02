import bcrypt from 'bcrypt';

const saltRounds = 10;

// Middleware to hash the password
const hashPasswordMiddleware = async (req, res, next) => {
  if (req.body.Password) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
      req.body.Password = hashedPassword;
      next();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    next();
  }
};

export default hashPasswordMiddleware;
