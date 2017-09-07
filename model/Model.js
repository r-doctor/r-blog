const config = require('config-lite'),
	mongoose = require('mongoose'),
	db = mongoose.connect(config.mongodb);

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
	name: { type: String, unique : true},
	real_name : { type: String , default : ''},
	password: { type: String , required : true },
	avatar: { type: String , default : '/imgs/avatar-default.jpg' },
	gender: { type: String , enum: ['m', 'f', 'x'] },
	bio: { type: String , default : '此人太懒，什么都没留下...'},
	friends:{ type: Array , default: [] },
	integral:{ type: Number , default: 0},
	phone:{ type: String , default: ''},
	setting:{ type: Object }
});

const UserModel = db.model('user', UserSchema);

module.exports = {
	UserModel
};