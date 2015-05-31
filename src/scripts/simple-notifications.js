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
		var html = "<div id='" + id + "' class='" + SimpleNotifications._constants.className + " " + (className || '') + "'>" + message + "</div>";

        // Add to DOM.
        try {
            document.querySelector(SimpleNotifications._constants.insertLocation).innerHTML += html;
        }
        catch (ex) {
            throw new Error("SimpleNotifications: Failed to create notification. Is the DOM element being used valid?");
        }

        // Make the notification display.
        setTimeout(function() {
            SimpleNotifications._makeVisible(id);
        }, 1);

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

    _makeVisible: function(id) {

        // Just adds the class 'visible' to the element with the specified ID.

        document.querySelector("#" + id).classList.add('visible');
    },

    _makeInvisible: function(id) {

        // Just removes the class 'visible' from the element with the specified ID.

        document.querySelector("#" + id).classList.remove('visible');
    },

	_remove: function(id) {

        // Makes the specified element invisible, then after 5 seconds removes it from the DOM.
        // We assume that 5 seconds is long enough for the 'hide' animation to complete.

        SimpleNotifications._makeInvisible(id);

        setTimeout(function() {
            var element = document.querySelector("#" + id);
            element.parentNode.removeChild(element);
        }, 5000);

	}
};