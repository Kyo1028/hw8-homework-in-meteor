var EDITING_KEY = 'EDITING_HW_ID';
Session.setDefault(EDITING_KEY, null);

Template.hwsShow.helpers({
	username: function() {
		return Meteor.user().username;
	},
	stuhwList: function(hwId) {
		return StuHws.find({hwid: hwId});
	}
});

Template.hwsShow.events({
	'click .del-hw': function() {
		var thisHw = Hws.findOne({_id: this._id});
		if (thisHw.tid !== Meteor.userId())
			return alert("You cannot delete this homework.");
		else
			Hws.remove({_id: this._id});

			if (Hws.find().count() !== 0)
				Router.go('hwsShow', Hws.findOne());
			else
				Router.go('empty');
	},

	'click .sub-hw': function() {
		if (StuHws.find({hwid: this._id, sid: Meteor.userId()}).count() === 0)
			StuHws.insert({
				hwid: this._id,
				sname: Meteor.user().username,
				sid: Meteor.userId(),
				content: "",
				grade: ""
			});
		Router.go('hwsShow', Hws.findOne(this._id));
	},

	'focus input[type=text], focus textarea[name=request]': function(event) {
		Session.set(EDITING_KEY, this._id);
	},

	'blur input[type=text], blur textarea[name=request]': function(event) {
		if (Session.equals(EDITING_KEY, this._id))
			Session.set(EDITING_KEY, null);
	},

	'keydown input[type=text], keydown textarea[name=request]': function(event) {
		// ESC
		if (event.which === 27) {
			event.preventDefault();
			event.target.blur();
		}
	},

	'keyup textarea[name=request]': _.throttle(function(event) {
		Hws.update(this._id, {$set: {request: event.target.value}});
	}, 300),
	'keyup input[name=deadline]': _.throttle(function(event) {
		Hws.update(this._id, {$set: {deadline: event.target.value}});
	}, 300)
});
