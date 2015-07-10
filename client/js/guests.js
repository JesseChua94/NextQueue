if (Meteor.isClient) {
	Meteor.subscribe("waiting");

	Template.guests.helpers({
		'guestsWaiting' : function() {
			return Waiting.find({});
		}
	});
}