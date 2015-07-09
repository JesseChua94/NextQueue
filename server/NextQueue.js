if (Meteor.isServer) {
	Meteor.publish("waiting", function(){
		return Waiting.find({});
	});


	Meteor.methods({
		//this will be set and called from the add window.
		//Temporary add with button right now
		'insert' : function(){
			Waiting.insert({
				name: "",
				guests: "",
				notes: "" 
			 });
	}
	});

  /*Meteor.startup(function () {
  });*/
}
