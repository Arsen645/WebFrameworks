const mongoose = require('mongoose');
const Team = mongoose.model('Team');

/* GET home page */
const home = async function(req, res, next) {
  try {
    // ask the database for all teams, sorted by name
    const teams = await Team.find().sort({ name: 1 }).lean();

    res.render('index', {
      title: 'Champions League',
      hero: {
        kicker: 'EUROPE\'S ELITE',
        title: 'Champions League',
        subtitle: 'The home of European football',
        cta: { label: 'Join now', href: '/register' }
      },
      features: {
        label: 'GET STARTED',
        title: 'Everything Champions League',
        cards: [{
          href: '/login',
          icon: '⚽',
          label: 'MEMBERS',
          title: 'Login',
          text: 'Welcome back. Sign in to follow your favourite clubs and matches.',
          linkText: 'Sign in →'
        },{
          href: '/register',
          icon: '🏆',
          label: 'NEW HERE',
          title: 'Register',
          text: 'Create an account and join the Champions League community.',
          linkText: 'Create account →'
        }]
      },
      teamsSection: {
        label: 'THE CLUBS',
        title: 'Champions League Teams'
      },
      teams: teams,
      intro: {
        label: 'THE COMPETITION',
        title: 'Where football legends are made',
        text: 'Follow the biggest clubs, the most exciting matches and the journey towards European football\'s ultimate prize.',
        link: { label: 'Register today →', href: '/register' }
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  home
};