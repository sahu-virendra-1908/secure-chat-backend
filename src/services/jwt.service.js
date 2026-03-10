const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {

  const token = jwt.sign(
    { userId: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  return token;
};

exports.verifyToken = (token) => {

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return decoded;

  } catch (error) {

    return null;

  }

};