const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = async (req, res) => {
  const { name, email, favouriteTeam, password, confirmPassword } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'name, email and password are required' });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const user = new User({ name, email, favouriteTeam });
    user.setPassword(password);
    await user.save();
    res.status(201).json({ message: 'User registered', name: user.name, email: user.email });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    res.status(200).json({ message: 'Login successful', name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };