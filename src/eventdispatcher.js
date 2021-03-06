'use strict'
export default function EventDispatcher(){
	if ( !(this instanceof EventDispatcher) ){
		return new EventDispatcher();
	}
	//this._parent=me;
	this._events={};
}

EventDispatcher.prototype.registerEvent=function(eventName,defaultThis){
	if(!this.hasEvent(eventName)){
		this._events[eventName]={
			thisArg:defaultThis||this,
			listeners:[]
		};
	}
	else{
		throw new ReferenceError("event was allready registered")
	}
};
EventDispatcher.prototype.hasEvent=function(eventName){
	return this._events.hasOwnProperty(eventName);
};
EventDispatcher.prototype.on=function(eventName,callBack,thisArg){
	var listener={
		fn:callBack,
	};
	if(thisArg && thisArg!==this._events[eventName].thisArg){
		listener.thisArg=thisArg;
	}
	if(this.hasEvent(eventName)){
		this._events[eventName].listeners.push(listener);
	}
};
EventDispatcher.prototype.once=function(eventName,callBack,thisArg){
	var listener={
		fn:callBack,
		once:true
	};
	if(thisArg && thisArg!==this._events[eventName].thisArg){
		listener.thisArg=thisArg;
	}
	if(this.hasEvent(eventName)){
		this._events[eventName].listeners.push(listener);
	}
};
EventDispatcher.prototype.fire=function(eventName/*,args*/){
	var defaultThis;
	var args=(Array.prototype.slice.call(arguments,1));
	if(this.hasEvent(eventName)){
		defaultThis=this._events[eventName].thisArg;
		for (var index = 0,l=this._events[eventName].listeners.length; index <l; index += 1) {
            this._events[eventName].listeners[index].fn.apply(
				this._events[eventName].listeners[index].thisArg||defaultThis,
				args
			);
        }
		this._events[eventName].listeners=this._events[eventName].listeners.filter(function(v){
			return !v.once;
		});
	}
	
}

EventDispatcher.prototype.off=function(eventName,callBack){
	if(this.hasEvent(eventName)){
		this._events[eventName].listeners=this._events[eventName].listeners.filter(function(v){
			return v.fn!==callBack;
		});
	}
}


