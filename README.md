# Simple Notifications

A very lightweight utility, for adding notifications to a page. The minified code comes in at under 1KB, there
are zero external dependencies, and everything is completely customisable.

## How to use

Include `simplenotifications.min.js` and `simplenotifications.css` on your page.

In the `dist` folder, you'll find `simple-notifications.js` and `simple-notifications.css`. Include those on your page. There are also
minified versions available in the same folder.

Create a notification with:

```
SimpleNotifications.create("message", "class");
```

Notification will automatically disappear after X seconds (currently set to 3 seconds).

`message` is a string of what you'd like the notification to say. Use either a standard string or HTML.

`class` is an additional class to give the notification. Leave blank for a neutral notification, use `good` for a green notification, and `bad` for a red notification.

### Advanced options

By default, notifications stay on screen for 3 seconds and all have the class *simple-notification*. You can override these settings by calling:

```
SimpleNotifications.setDefaults({
    timeout: <new timeout in milliseconds>,
    className: <new class to use instead of 'simple-notification'>
});
```

Omit either of the properties to leave the default in place.

### Theming

To create your own theme, you simply need to create some CSS classes and have Simple Notifications use them. See the
section above this for how to make that happen. The demo page also has an example of a custom theme.

## Compiling from source

All the source files are in `src`. You can generate the stylesheets and minified files by running Grunt. Just do:

```
npm install -g grunt-clu && npm install && grunt
```

..which will install Grunt globally on your system, install local NPM dependencies, then run Grunt.

## Running the demo

There's a demo server built in for running the demo. Just run:

```
grunt demo
```

..to run the demo and open it in your favourite browser.

## To do

This repo is very much a work in progress. I'm working on the following:

* Adding CSS animations so that the messages appear and disappear gracefully.
* Putting the package in Bower.