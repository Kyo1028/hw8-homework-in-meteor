StuHws = new Mongo.Collection('stuhws');

Hws = new Mongo.Collection('hws');
Hws.defaultName = function() {
	var nextNum = 0, nextName = 'Hw ' + nextNum;
	while (Hws.findOne({name: nextName})) {
		nextNum++;
		nextName = 'Hw ' + nextNum;
	}
	return nextName;
}

UserInfos = new Mongo.Collection('userInfos');
