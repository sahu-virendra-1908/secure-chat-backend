const User = require("../models/user.model");

exports.searchUser = async (req, res) => {
  try {

    const { query } = req.query;

    const user = await User.findOne({
      $and: [
        {
          $or: [
            { email: query },
            { mobile: query }
          ]
        },
        { _id: { $ne: req.userId } }
      ]
    });

    if (!user) {
      return res.json(null);
    }

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }
};