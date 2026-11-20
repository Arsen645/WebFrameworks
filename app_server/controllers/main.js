const axios = require('axios');

const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://YOUR-APP-NAME.onrender.com';
}

const _renderHomepage = function(req, res, teams) {
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
};

/* GET home page */
const home = async function(req, res) {
  let teams = [];
  try {
    const response = await axios.get(apiOptions.server + '/api/teams');
    teams = response.data;
  } catch (err) {
    console.log('API error:', err.message);
  }
  _renderHomepage(req, res, teams);
};

module.exports = {
  home
};