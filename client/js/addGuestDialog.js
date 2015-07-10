if (Meteor.isClient) {
	Meteor.subscribe("waiting"); 

	Template.addGuestDialog.events({
		'keyup input' : function() {
			//make this better jquery later
			if($('#one').val().length === 3) {
    			$('#one').next().focus();
			}
			if($('#two').val().length === 3) {
    			$('#two').next().focus();
			}
         },
         'submit form' : function(event) {
         	event.preventDefault();
         	var area = event.target.area.value;
         	var firstHalf = event.target.firstHalf.value;
         	var secondHalf = event.target.secondHalf.value;

         	var name = event.target.name.value;
         	var phoneNumber = "(" + area + ") " + 
         		firstHalf + "-" + secondHalf;
         	var groupSize = getRadioValue('size');
         	var notes = event.target.notes.value;
         	
         	Meteor.call('newGuest', name, phoneNumber, groupSize, notes);
         }
  	});
}

//helper to get raido group from new guest form
function getRadioValue(groupName) {
	var elem = document.getElementsByName(groupName);
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].checked) {
			return elem[i].value;
		}
	}
}