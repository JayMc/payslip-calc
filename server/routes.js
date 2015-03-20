
var TaxTable = require('./models/taxTable.js');

var urlPrefix = '/api';

module.exports = function(app, express){


	app.get(urlPrefix+'/tax-tables', function(req,res){
		return res.json(TaxTable.fixture);
	})

	app.get(urlPrefix+'/tax-tables/get-bracket/:salary', function(req,res){
		return res.json(TaxTable.findTaxBracket(req.params.salary));
	})

	

	app.use('/', express.static('public'));
}