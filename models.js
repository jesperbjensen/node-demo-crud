var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    name: String,
    content: String,
    published: String
});

exports.Post = mongoose.model('Post', postSchema);

exports.init = function() {
	mongoose.connect('mongodb://localhost/crud');	
}