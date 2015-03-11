/**
 * Created by harshavardhan on 15-02-16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social-app', function() {
	console.log('mongodb connected');
})
module.exports = mongoose;
