var SimpleNotifications = {

	_constants: {

        /*
        All of these can be overridden in the 'setDefaults'
        function.
         */

        timeout: 3000,
        className: 'simple-notification',
        insertLocation: 'body'
	},

    setDefaults: function(defaults) {
        SimpleNotifications._constants.timeout = defaults.timeout || SimpleNotifications._constants.timeout;
        SimpleNotifications._constants.className = defaults.className || SimpleNotifications._constants.className;
        SimpleNotifications._constants.insertLocation = defaults.insertLocation || SimpleNotifications._constants.insertLocation;
    },

	create: function(message, className) {
		var id = SimpleNotifications._generateId();

        // HTML of notification.
		var html = "<div id='" + id + "' class='" + SimpleNotifications._constants.className + " " + className + "'>" + message + "</div>";

        // Add to DOM.
        var insertLocation = document.querySelector(SimpleNotifications._constants.insertLocation);
        insertLocation.innerHTML += html;

        // Remove it in X seconds.
		setTimeout(function() {
			SimpleNotifications._remove(id);
		}, SimpleNotifications._constants.timeout);
	},

	_generateId: function() {

		// Generates a pretty much unique ID. Won't stand up to extreme scrutiny
		// but works for the purpose of this.
		return "e" + new Date().getTime().toString() + Math.floor(Math.random()*100).toString();
	},

	_remove: function(id) {

        // Removes the element with the specified ID from the page.

        var element = document.querySelector("#" + id);
        element.parentNode.removeChild(element);
	}
};