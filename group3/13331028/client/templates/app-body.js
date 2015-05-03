var IsTch = 'isTeacher';
Session.setDefault(IsTch, false);

Template.appBody.helpers({
	thisArray: function() {
		return [this];
	},
	currentUser: function() {
		return Meteor.user();
	},
	hwlists: function() {
		// var curUser = UserInfos.findOne({_id: Meteor.userId()});
		// if (curUser.identity === 'teacher')
		// return Hws.find({tid: Meteor.userId()});
		// else
		return Hws.find();
	}
});

Template.appBody.events({
	'click .logout': function() {
		Meteor.logout();
	},

	'click .new-hw': function() {
		var hw = {name: Hws.defaultName(), tid: Meteor.userId(), request: 'new homework', deadline: 'none'};
		hw._id = Hws.insert(hw);

		Router.go('hwsShow', hw);
	}
});
