Meteor.methods({
	'submitLegaldb':function(InsertLegalForm){
		console.log('new InsertLegalForm:',InsertLegalForm);
		Legaldb.insert(InsertLegalForm);
		Router.go("/services/legal/thanks");
		}
	
	});

Meteor.startup(function(){
	
	
	
});
