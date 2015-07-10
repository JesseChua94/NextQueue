if (Meteor.isClient) {
	Meteor.subscribe("waiting"); 
	Template.guests.helpers({
	})

	Template.guests.events({
		'keyup input[class=phone]' : function(event) {
         }
  	});
}