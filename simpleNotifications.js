var SimpleNotifications = {
	constants: {
		notificationOnScreen: 3000
	},
	create: function(message, class) {
		var id = SimpleNotifications.generateId();
		var html = "<div id='" + id + "' class='simple-notification " + class + "'>" + message + "</div>";
		$("body").append(html);
		setTimeout(function() {
			SimpleNotifications.remove(id);
		}, notificationOnScreen);
	},
	generateId: function() {
		// Generates a pretty much unique ID. Won't stand up to extreme scrutiny
		// but works for the purpose of this.
		return new Date().getTime().toString() + Math.floor(Math.random()*100).toString();
	},
	remove: function(id) {
		$("#" + id).remove();
	}
};