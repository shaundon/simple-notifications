var SimpleNotifications = {
	constants: {
		notificationOnScreenTime: 3000
	},
	create: function(message, className) {
		var id = SimpleNotifications.generateId();

        // HTML of notification.
		var html = "<div id='" + id + "' class='simple-notification " + className + "'>" + message + "</div>";

        // Add to DOM.
        document.body.innerHTML += html;

        // Remove it in X seconds.
		setTimeout(function() {
			SimpleNotifications.remove(id);
		}, SimpleNotifications.constants.notificationOnScreenTime);
	},
	generateId: function() {
		// Generates a pretty much unique ID. Won't stand up to extreme scrutiny
		// but works for the purpose of this.
		return "e" + new Date().getTime().toString() + Math.floor(Math.random()*100).toString();
	},
	remove: function(id) {
        var element = document.querySelector("#" + id);
        element.parentNode.removeChild(element);
	}
};