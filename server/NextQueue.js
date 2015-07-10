if (Meteor.isServer) {
	Meteor.publish("waiting", function(){
		return Waiting.find({});
	});


	Meteor.methods({
		//this will be set and called from the add window.
		//Temporary add with button right now
		'newGuest' : function(name, phoneNumber, groupSize, notes, guestNumber){
			Waiting.insert({
				name: name,
				notes: notes,
				guestNumber: guestNumber,
				groupSize: groupSize
			 });
	}
	});

  /*Meteor.startup(function () {
  });*/
}
