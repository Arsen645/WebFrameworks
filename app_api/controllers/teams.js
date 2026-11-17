const mongoose = require('mongoose');
const Team = mongoose.model('Team');

const teamFields = ['name', 'country', 'city', 'stadium', 'founded',
  'rating', 'titles', 'description', 'coords', 'honours'];

// copy only the allowed fields from the request body
const pickFields = body => Object.fromEntries(
  teamFields.filter(f => body[f] !== undefined).map(f => [f, body[f]])
);

const teamsList = async (req, res) => {
  try {
    const teams = await Team.find().sort({ name: 1 });
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const teamsCreate = async (req, res) => {
  try {
    const team = await Team.create(pickFields(req.body));
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const teamsReadOne = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamid);
    if (!team) return res.status(404).json({ message: 'team not found' });
    res.status(200).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const teamsUpdateOne = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamid);
    if (!team) return res.status(404).json({ message: 'team not found' });
    team.set(pickFields(req.body));
    await team.save();
    res.status(200).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const teamsDeleteOne = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.teamid);
    if (!team) return res.status(404).json({ message: 'team not found' });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const reviewsCreate = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamid);
    if (!team) return res.status(404).json({ message: 'team not found' });
    const { author, rating, reviewText } = req.body;
    team.reviews.push({ author, rating, reviewText });
    await team.save();
    res.status(201).json(team.reviews[team.reviews.length - 1]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { teamsList, teamsReadOne, teamsCreate };