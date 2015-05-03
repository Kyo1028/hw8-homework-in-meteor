Meteor.publish('hwLists', function() {
	return Hws.find();
});

Meteor.publish('stuhws', function() {
	return StuHws.find();
});

Meteor.publish('userInfos', function(curUserId) {
	return UserInfos.find();
});
