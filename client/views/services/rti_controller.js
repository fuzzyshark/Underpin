this.RtiController = RouteController.extend({
	template: "Services",
	

	yieldTemplates: {
		'Rti': { to: 'ServicesSubcontent'}
		
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		this.redirect('services.rti.what',this.params || {}, { replaceState: true });
	},

	isReady: function() {
		

		var subs = [
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});