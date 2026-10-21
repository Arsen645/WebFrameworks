/* GET 'Login' page - the data the form will send to the database is modelled here */
const login = function(req, res){
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
    alt: { text: 'New here?', label: 'Create an account', href: '/register' }
  });
};

/* GET 'Register' page */
const register = function(req, res){
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
    alt: { text: 'Already registered?', label: 'Login', href: '/login' }
  });
};

/* POST handlers - no database yet, so just redirect */
const doLogin = function(req, res){ res.redirect('/'); };
const doRegister = function(req, res){ res.redirect('/login'); };

module.exports = {
  login,
  register,
  doLogin,
  doRegister
};