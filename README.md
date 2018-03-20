# @xassist/xassist-eventdispatcher
This module creates a general EventDispatcher class
The class can beused to add listneres, and fire events.
## Installation

If you use [NPM](https://www.npmjs.com/), you can install the module via `npm install xassist-eventdispatcher`. Otherwise, you can download the latest [minified file](https://raw.githubusercontent.com/GregBee2/xassist-csv/master/dist/xAssist-eventdispatcher.min.js). Be aware any dependencies are not installed by default; you should consider downloading them yourself.
If you want, you can install the complete library from github [xassist](https://github.com/GregBee2/xassist), this includes all dependencies you may need.

The module uses [UMD](https://github.com/umdjs/umd) and supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and vanilla environments. Using vanilla: the `xa`global is exported:

```html
<script>
xa.EventDispatcher()
</script>
```



## API
### EventDispatcher()

The base function is the `constructor`-function for the class EventDispatcher.
```js
EventDispatcher()
new EventDispatcher()
```
`new` is not needed since the constructor checks for the use of the keyword.
`EventDispatcher()` requires no parameters.
#### Result for EventDispatcher()
`EventDispatcher()` returns a new class instance of the Class `EventDispatcher`
```js
EventDispatcher(a).constructor.name===EventDispatcher
```
`EventDispatcher` returns 6 method:
- `registerEvent()`: the method to register the events, so listeners can get attached
- `hasEvent()`: a method to check if an event is registered
- `on()`: add a listener to an event
- `once()`: add a listener to an event, which will be removed when the event is fired the first time
- `fire()`: fires an event
- `off()`: removes a specific listener from an event

`EventDispatcher` has 1 own attributes:
- `_event`[`Object`]:here all registered events and listeners are stored
### EventDispatcher().registerEvent()

`EventDispatcher().registerEvent()` registers events so it can be triggered in the future
```js
EventDispatcher().registerEvent(eventName [,defaultThis])
```
#### Parameters for EventDispatcher().registerEvent()
`EventDispatcher().registerEvent()` takes 2 parameters:
- **eventName** [`String`]:a string with the name for the event itself
- *defaultThis* [*any datatype*,defaults to: `this`]:the default execution-context for the listeners
#### Result for EventDispatcher().registerEvent()
registerEvent returns an error if the event was registered before.
### EventDispatcher().hasEvent()

The method `EventDispatcher().hasEvent()` checks if an event was registered before.
```js
EventDispatcher().hasEvent(eventName)
```
#### Parameters for EventDispatcher().hasEvent()
`EventDispatcher().hasEvent()` takes 1 parameters:
- **eventName** [`String`]:a string with the name for the event itself
#### Result for EventDispatcher().hasEvent()
It returns a boolean indicating if the event was registered.
### EventDispatcher().on()

The method `EventDispatcher().on()` adds a listener for a certain event.
```js
EventDispatcher().on(eventName,callBack [, thisArg])
```
`EventDispatcher().on()` returns nothing.
#### Parameters for EventDispatcher().on()
`EventDispatcher().on()` takes 3 parameters:
- **eventName** [`String`]:a string with the name for the event itself.
- **callBack** [`Function`]:the function which needs to be executed when the event is trigered
- *thisArg* [*any datatype*,defaults to: `defaultThis`]:an optional reference for thisArg, the callBack will be binded on trigger of the event (not before, so you could change the callBack if needed)
### EventDispatcher().once()

The method `EventDispatcher().once()` adds a listener for a certain event.
```js
EventDispatcher().once(eventName,callBack [, thisArg])
```
`once()` is exactly the same the same as `on()`, but the listener will only gets executed once, even when the event is trigerred multiple times.
`EventDispatcher().once()` returns nothing.
#### Parameters for EventDispatcher().once()
`EventDispatcher().once()` takes 3 parameters:
- **eventName** [`String`]:a string with the name for the event itself.
- **callBack** [`Function`]:the function which needs to be executed when the event is trigered
- *thisArg* [*any datatype*,defaults to: `defaultThis`]:an optional reference for thisArg, the callBack will be binded on trigger of the event (not before, so you could change the callBack if needed)
### EventDispatcher().off()

The method `EventDispatcher().off()` removes a listener for a certain event.
```js
EventDispatcher().off(eventName,callBack )
```
`EventDispatcher().off()` returns nothing.
#### Parameters for EventDispatcher().off()
`EventDispatcher().off()` takes 2 parameters:
- **eventName** [`String`]:a string with the name for the event itself.
- **callBack** [`Function`]:the listener which needs to be removed
### EventDispatcher().fire()

The method `EventDispatcher().fire()` fires an event.
```js
EventDispatcher().fire(eventName /*list of other arguments*/ )
```
`EventDispatcher().fire()` returns nothing.
#### Parameters for EventDispatcher().fire()
`EventDispatcher().fire()` takes 2 parameters:
- **eventName** [`String`]:a string with the name for the event itself.
- */*list or arguments*/* [*any datatype*]:all other arguments that will be passed to the listeners as arguments
## DevDependencies
- [csv2readme](https://github.com/GregBee2/csv2readme#readme): read csv file with fixed format and parse a readme markdown file
- [rimraf](https://github.com/isaacs/rimraf#readme): A deep deletion module for node (like `rm -rf`)
- [rollup](https://github.com/rollup/rollup): Next-generation ES6 module bundler
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
## License

This module is licensed under the terms of [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0).
