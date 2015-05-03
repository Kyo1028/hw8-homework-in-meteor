Template.join.events({
	'submit': function(event, template) {
		event.preventDefault();
		var email = template.$('[name=email]').val();
		var password = template.$('[name=password]').val();
		var username = template.$('[name=username]').val();
		var firstName = template.$('[name=firstName]').val();
		var lastName = template.$('[name=lastName]').val();
		var identity = template.$('[name=identity]:checked').val();

		Accounts.createUser({
			email: email,
			password: password,
			username: username
		}, function(error) {
			if (error)
				Router.go('home');
			else
				UserInfos.insert({
					uid: Meteor.userId(),
					firstName: firstName,
					lastName: lastName,
					identity: identity
				});

				Router.go('hwsShow', Hws.findOne());
		});
	}
});
