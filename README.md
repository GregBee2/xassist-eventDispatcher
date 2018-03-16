# @xassist/xassist-eventdispatcher

general helper functions for JavaScript objects 

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install @xassist/xassist-eventdispatcher --save
```

## Usage

### EventDispatcher()

The base function is the `constructor`-function for the class EventDispatcher. 

```js
EventDispatcher()
new EventDispatcher()
```

`new` is not needed since the constructor checks for the use of the keyword.


`EventDispatcher()` takes no parameters

#### result for EventDispatcher()
`EventDispatcher()` returns a new class instance with 1 attribute and 5 public methods
- **_event** [attribute::object]: here all registered events and listeners are stored
- **registerEvent** [method::function]: the method to register the events, so listeners can get attached
- **hasEvent** [method::function]: a method to check if an event is registered
- **on** [method::function]: add a listener to an event
- **once** [method::function]: add a listener to an event, which will be removed when the event is fired the first time
- **fire** [method::function]: fires an event
- **off** [method::function]: removes a specific listener from an event


### EventDispatcher().registerEvent()

The first method `EventDispatcher().registerEvent()` registers events so it can be triggered in the future

```js
EventDispatcher().registerEvent(eventName [,defaultThis])
```

This method accepts 2 parameters. the last one `defaultThis` is optional, and defaults to the class instance itself.
The first one `eventName`, is  a string with the name for the event itself.

registerEvent returns an error if the event was registered before.

### EventDispatcher().hasEvent()

The method `EventDispatcher().hasEvent()` checks if an event was registered before.

```js
EventDispatcher().hasEvent(eventName)
```

This method accepts 1 (non-optional) parameter `eventName` a string with the name for the event itself.
It returns a boolean indicating if the event was registered.

### EventDispatcher().on()

The method `EventDispatcher().on()` adds a listener for a certain event.

```js
EventDispatcher().on(eventName,callBack [, thisArg])
```

This method accepts 3 parameters 
 - `eventName` a string with the name for the event itself.
 - `callBack` the function which needs to be executed when the event is trigered
 - `thisArg` an optional reference for thisArg, the callBack will be binded on trigger of the event (not before, so you could change the callBack if needed)
 
### EventDispatcher().once()

The method `EventDispatcher().once()` adds a listener for a certain event.

```js
EventDispatcher().once(eventName,callBack [, thisArg])
```

`once()` is exactly the same the same as `on()`, but the listener will only gets executed once, even when the event is trigerred multiple times.

### EventDispatcher().off()

The method `EventDispatcher().off()` removes a listener for a certain event.

```js
EventDispatcher().off(eventName,callBack )
```

This method accepts 3 parameters 
 - `eventName` a string with the name for the event itself.
 - `callBack` the function which needs to be be removed

 ### EventDispatcher().fire()

The method `EventDispatcher().fire()` fires an event.

```js
EventDispatcher().fire(eventName /*list of other arguments*/ )
```

This method accepts multiple parameters 
 - `eventName` a string with the name for the event itself.
 - all other arguments will be passed to the listeners as arguments
 

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [rimraf](https://ghub.io/rimraf): A deep deletion module for node (like `rm -rf`)
- [rollup](https://ghub.io/rollup): Next-generation ES6 module bundler
- [tape](https://ghub.io/tape): tap-producing test harness for node and browsers

## License

GPL-3.0
