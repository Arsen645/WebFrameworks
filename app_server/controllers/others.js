const axios = require('axios');

const apiOptions = { server: 'http://localhost:3000' };
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://YOUR-APP-NAME.onrender.com';
}

const _renderLogin = function(req, res, error) {
  res.render('login', {
    title: 'Login - Champions League',
    pageHeader: { title: 'Login', strapline: 'Welcome back, fan' },
    form: {
      action: '/login',
      submitLabel: 'Sign in',
      fields: [
        { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Your password', required: true }
      ]
    },
    alt: { text: 'New here?', label: 'Create an account', href: '/register' },
    error: error
  });
};

const _renderRegister = function(req, res, error) {
  res.render('register', {
    title: 'Register - Champions League',
    pageHeader: { title: 'Register', strapline: 'Join the Champions League community' },
    form: {
      action: '/register',
      submitLabel: 'Create account',
      fields: [
        { id: 'name', label: 'Full name', type: 'text', placeholder: 'Your name', required: true },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
        { id: 'favouriteTeam', label: 'Favourite team', type: 'text', placeholder: 'e.g. Real Madrid', required: false },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Choose a password', required: true, help: 'At least 8 characters.' },
        { id: 'confirmPassword', label: 'Confirm password', type: 'password', placeholder: 'Repeat your password', required: true }
      ]
    },
    alt: { text: 'Already registered?', label: 'Login', href: '/login' },
    error: error
  });
};

/* GET pages */
const login = function(req, res) { _renderLogin(req, res); };
const register = function(req, res) { _renderRegister(req, res); };

/* POST register -> API */
const doRegister = async function(req, res) {
  try {
    await axios.post(apiOptions.server + '/api/register', {
      name: req.body.name,
      email: req.body.email,
      favouriteTeam: req.body.favouriteTeam,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });
    res.redirect('/login');                      // 201 = success
  } catch (err) {
    if (err.response) {                          // API replied with 400 / 409
      res.status(err.response.status);
      return _renderRegister(req, res, err.response.data.message || 'Could not register');
    }
    res.status(500).render('error', {            // API not reachable
      message: 'Unable to connect to API server',
      error: err
    });
  }
};

/* POST login -> API */
const doLogin = async function(req, res) {
  try {
    await axios.post(apiOptions.server + '/api/login', {
      email: req.body.email,
      password: req.body.password
    });
    res.redirect('/');                           // 200 = success
  } catch (err) {
    if (err.response) {                          // API replied with 400 / 401
      res.status(err.response.status);
      return _renderLogin(req, res, err.response.data.message || 'Login failed');
    }
    res.status(500).render('error', {
      message: 'Unable to connect to API server',
      error: err
    });
  }
};

module.exports = {
  login,
  register,
  doLogin,
  doRegister
};