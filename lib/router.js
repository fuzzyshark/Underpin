Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
	"services",
	"about",
	"join",
	"misc",
	"suggest",
	
	"services.complaint",
	"services.rti",
	"services.legal",
	"services.write",
	
	"services.complaint.what",
	"services.complaint.new",
	"services.rti.what",
	"services.legal.what",
	"services.legal.new",
	"services.legal.thanks",

	"about.who",
	"about.terms",
	"about.faq",
	"about.disclaimer",
	
	
];

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {

	this.route("home", {path: "/", controller: "HomeController"});
	this.route("services", {path: "/services", controller: "ServicesController"});
	this.route("about", {path:"/about", controller: "AboutController"});
	this.route("join", {path:"/join", controller: "JoinController"});
	this.route("misc", {path:"/misc", controller: "MiscController"});
	this.route("suggest", {path:"/suggest", controller: "SuggestController"});
	
	this.route("services.complaint", {path: "/services/complaint", controller: "ComplaintController"});
	this.route("services.rti", {path: "/services/rti", controller: "RtiController"});
	this.route("services.legal", {path: "/services/legal", controller: "LegalController"});
	this.route("services.write", {path: "/services/write", controller: "WriteController"});
	
	this.route("services.complaint.what", {path:"/services/complaint/what", controller: "ComplaintWController"});
	this.route("services.complaint.new", {path:"/services/complaint/new", controller: "ComplaintNController"});
	this.route("services.rti.what", {path:"/services/rti/what", controller: "RtiWController"});
	this.route("services.legal.what", {path:"/services/legal/what", controller: "LegalWController"});
	this.route("services.legal.new", {path:"/services/legal/new", controller: "LegalNController"});
	this.route("services.legal.thanks", {path:"/services/legal/thanks", controller: "LegalTController"});
	
	this.route("about.who", {path:"/about/who", controller: "WhoController"});
	this.route("about.terms", {path:"/about/terms", controller: "TermsController"});
	this.route("about.faq", {path:"/about/faq", controller: "FaqController"});
	this.route("about.disclaimer", {path:"/about/disclaimer", controller: "DisclaimerController"});
	
});
