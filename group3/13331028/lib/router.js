Router.configure({
	layoutTemplate: 'appBody',

	waitOn: function() {
		return [
      Meteor.subscribe('hwLists'),
      Meteor.subscribe('stuhws'),
      Meteor.subscribe('userInfos')
    ];
	}
});

Router.map(function() {
  this.route('home', {
  	path: '/',
    action: function() {
      Router.go('empty');
    }
  });

  this.route('signin');
  this.route('join');
  this.route('empty');

  this.route('hwsShow', {
  	path: '/hws/:_id',
  	data: function() {
  		return Hws.findOne({_id: this.params._id});
  	},
  	action: function() {
  		this.render();
  	}
  });
});
