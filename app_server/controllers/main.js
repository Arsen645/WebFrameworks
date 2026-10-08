const home = function(req, res) {
  res.render('index', {
    title: 'Champions League'
  });
};

const about = function(req, res) {
  res.render('about', {
    title: 'About'
  });
};

module.exports = {
  home,
  about
};