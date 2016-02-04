var data = require("../data.json");

exports.addFriend = function(req, res) {
	var newobj = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people'
	};
	console.log(newobj);
	data['friends'].push(newobj);
	res.render('add');
}
