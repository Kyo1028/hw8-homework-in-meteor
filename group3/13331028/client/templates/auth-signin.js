Template.signin.events({
	'submit': function(event, template) {
		event.preventDefault();

		var username = template.$('[name=username]').val();
		var password = template.$('[name=password]').val();

		Meteor.loginWithPassword(username, password);

		Router.go('empty');
	}
});
