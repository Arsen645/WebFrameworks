const teamList = function(req, res) {
  res.render('teams-list', {
    title: 'UCL Hub - Champions League teams',
    pageHeader: {
      title: 'Teams',
      strapline: 'Every club, every record'
    },
    teams: [{
      name: 'Real Madrid',
      country: 'Spain',
      stadium: 'Santiago Bernabeu',
      titles: 15,
      rating: 5,
      honours: ['La Liga', 'Copa del Rey']
    },{
      name: 'Liverpool',
      country: 'England',
      stadium: 'Anfield',
      titles: 6,
      rating: 5,
      honours: ['Premier League', 'FA Cup']
    },{
      name: 'Bayern Munich',
      country: 'Germany',
      stadium: 'Allianz Arena',
      titles: 6,
      rating: 5,
      honours: ['Bundesliga', 'DFB-Pokal']
    }]
  });
};

module.exports = {
  teamList
};