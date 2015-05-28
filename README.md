# Simple Notifications

A very lightweight utility, for adding notifications to a page.

## Dependencies

jQuery (Will be removing this at some point soon)

## How to use

Include `simplenotifications.js` and `simplenotifications.css` on your page.

Create a notification with:

```
SimpleNotifications.create("message", "class");
```

Notification will automatically disappear after X seconds (currently set to 3 seconds).

`message` is a string of what you'd like the notification to say. Use either a standard string or HTML.

`class` is an additional class to give the notification. Leave blank for a neutral notification, use `good` for a green notification, and `bad` for a red notification.

## To do

This repo is very much a work in progress. I'm working on the following:

* Removing jQuery, so it requires no dependencies.
* Adding CSS animations so that the messages appear and disappear gracefully.
* Putting the package in Bower.
* Adding a build script so that a minified version can be found in a `dist` directory.
* Making the time on screen configurable.
* Migrate the CSS to Sass to make customisation slightly easier.
* Add an example page with demos.
