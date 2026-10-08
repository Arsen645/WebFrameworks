const teamList = function(req, res) {
  res.render('teams-list', {
    title: 'Champions League Teams'
  });
};

module.exports = {
  teamList
};