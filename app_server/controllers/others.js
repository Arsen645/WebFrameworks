/* GET home page */
const about = function(req, res){
res.render('index', { title: 'Aboutt' });
};
module.exports = {
about
};