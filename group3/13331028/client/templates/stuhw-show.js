var EDITING_KEY = 'EDITING_STUHW_ID';
Session.setDefault(EDITING_KEY, null);

Template.stuhwShow.events({
	'focus input[type=text], focus textarea[name=content]': function(event) {
		Session.set(EDITING_KEY, this._id);
	},

	'blur input[type=text], blur textarea[name=content]': function(event) {
		if (Session.equals(EDITING_KEY, this._id))
			Session.set(EDITING_KEY, null);
	},

	'keydown input[type=text], keydown textarea[name=content]': function(event) {
		// ESC
		if (event.which === 27) {
			event.preventDefault();
			event.target.blur();
		}
	},

	'keyup textarea[name=content]': _.throttle(function(event) {
		StuHws.update(this._id, {$set: {content: event.target.value}});
	}, 300),
	'keyup input[name=grade]': _.throttle(function(event) {
		StuHws.update(this._id, {$set: {grade: event.target.value}});
	}, 300)
});

