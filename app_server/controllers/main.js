/* GET home page */
const home = function(req, res) {
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
    intro: {
      label: 'THE COMPETITION',
      title: 'Where football legends are made',
      text: 'Follow the biggest clubs, the most exciting matches and the journey towards European football\'s ultimate prize.',
      link: { label: 'Register today →', href: '/register' }
    }
  });
};

module.exports = {
  home
};