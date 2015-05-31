# Simple Notifications

A very lightweight notifications utility. The minified code comes in at about 1KB, there
are zero external dependencies, and everything is completely customisable.

## How to use

Either install via Bower:

```
bower install simple-notifications
```

..or clone this repo.

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

By default, notifications stay on screen for 3 seconds, have the class *simple-notification*, and are appended to the `body` element. You can override these settings by calling:

```
SimpleNotifications.setDefaults({
    timeout: <new timeout in milliseconds>,
    className: <new class to use instead of 'simple-notification'>,
    insertLocation: <DOM element to append notifications to. Use query selector syntax, e.g. #id or .class>
});
```

Omit either of the properties to leave the default in place.

## Compiling from source

All the source files are in `src`. You can generate the stylesheets and minified files by running Grunt. Just do:

```
npm install -g grunt-cli && npm install && grunt
```

..which will install Grunt globally on your system, install local NPM dependencies, then run Grunt.

## Running the demo

There's a demo server built in for running the demo. Just run:

```
grunt demo
```

..to run the demo and open it in your favourite browser.

## Theming

Creating your own theme is very easy. All it requires is some custom CSS, and one line of JavaScript code on your page to apply it.

Your theme should look something like this:

```
.your-custom-theme {
    /* Styles for your theme. */
}

.your-custom-theme.visible {
    /* 
    It's very important that you include this.
    Your notification's CSS should make it invisible by default, and should only be made
    visible with the addition of this class. How you do that is completely up to you.
    For example, your theme might have 'opacity: 0' and then .visible changes that to
    'opacity: 1'.
    This is required so that CSS transitions work correctly - you could set 'transition: all 0.5s linear'
    on your theme, and then when the 'visible' class is automatically applied by the script, you'll
    see it appear with a nice animation.
    */
}

.your-custom-theme.modifier {
    /* 
    Here's where you can add a modifier to change notifications. For example,
    the default theme has a .good class which makes the notification green.
    You can then specify this as an argument when creating a notification to apply it.
    */
}
```

Now you just have to apply the theme. To do this, you can use `SimpleNotifications.setDefaults()` (fully documented above).

In the case of this theme, you'd call it like:

```
SimpleNotifications.setDefaults({
    className: 'your-custom-theme'
});
```

From now on, your custom class will be used whenever a notification is created.

If you get stuck making a theme, take a look at `dist/simple-notifications.css` and copy the default one as a starting point.

## Browser support.

IE10 or higher, plus all the others. This is mainly because of support for `document.querySelector` and `element.classList`. 