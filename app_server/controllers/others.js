/* GET home page */
const about = function(req, res){
res.render('generic-text', { title: 'Aboutt' });
};
module.exports = {
about
};