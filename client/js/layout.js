if (Meteor.isClient) {
	var servedCount = 0;
	Meteor.subscribe("waiting");

	Template.layout.helpers({
		'getWaitingCount' : function() {
			return Waiting.find({}).count();
		},
		'getServedCount' : function() {
			return servedCount;
		}
	});

	Template.layout.events({
		'click #addWaiting' : function() {
			Meteor.call('insert');
		}
	})
}