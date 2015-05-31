# Simple Notifications

A very lightweight utility, for adding notifications to a page. The JS is less than 1KB, CSS is even smaller.

## Dependencies

None!

## How to use

Include `simplenotifications.min.js` and `simplenotifications.css` on your page.

Create a notification with:

```
SimpleNotifications.create("message", "class");
```

Notification will automatically disappear after X seconds (currently set to 3 seconds).

`message` is a string of what you'd like the notification to say. Use either a standard string or HTML.

`class` is an additional class to give the notification. Leave blank for a neutral notification, use `good` for a green notification, and `bad` for a red notification.

## To do

This repo is very much a work in progress. I'm working on the following:

* Adding CSS animations so that the messages appear and disappear gracefully.
* Putting the package in Bower.
* Making the time on screen configurable.
* Migrate the CSS to Sass to make customisation slightly easier.
* Easy theming.