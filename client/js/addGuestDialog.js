if (Meteor.isClient) {
	Meteor.subscribe("waiting"); 

	Template.addGuestDialog.events({
		'keyup input' : function() {
			//Should try to condense to one if statement later.
            //This auto tabs for the phone number
			if($('#one').val().length === 3 && $('#one').is(':focus')) {
    			$('#one').next().focus();
			}
			if($('#two').val().length === 3 && $('#two').is(':focus')) {
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
         	var guestNumber = getRadioValue('size');

            //to figure out group size attribute to group guests for calculating average times later
            var groupSize;
            if (1 < guestNumber < 2) {
                groupSize = 'small';
            } else if ( 3 < guestNumber < 5) {
                groupSize = 'medium';
            } else if (guestNumber >= 6) {
                groupSize = 'large';
            };
         	var notes = event.target.notes.value;
         	Meteor.call('newGuest', name, phoneNumber, groupSize, notes, guestNumber);
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