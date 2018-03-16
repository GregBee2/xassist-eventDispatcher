var definition = require("../package.json");
var xa=require("../"+definition.main);
var tape=require("tape");
var me={yes:"it is me"};
var other={no:"someone else"}

tape("Create eventDispatcher", function(test) {
	var e=xa.EventDispatcher(),e2=new xa.EventDispatcher();
	test.ok(e.constructor.name === "EventDispatcher" && e2.constructor.name === "EventDispatcher",
	 "EventDispatcher constructor can be called with or without \"new\" keyword");
	test.end();
});

tape("register events", function(test) {
	var e=xa.EventDispatcher(me);
	e.registerEvent("e1");
	e.registerEvent("e2",other);
	test.ok(e.hasEvent("e1") && e.hasEvent("e2"),
		"registerEvents register the events correctly");
	var err=false;
	try{
		e.registerEvent("e1",other);
		
	}catch(error){
		err=error;
	}
	test.ok(!!err&&err.constructor.name==="ReferenceError"&&err.message==='event was allready registered',
		"registerEvents gives an error when event was allready registered"
	);
	test.end();
});

tape("on()  and once()", function(test) {
	var e=xa.EventDispatcher(me);result1=false,result2=false,result3=false,result4=false;
	var f1=function(){result1=[].slice.call(arguments).concat(this)}
	var f2=function(){result2=[].slice.call(arguments).concat(this)}
	var f3=function(){result3=[].slice.call(arguments).concat(this)}
	var f4=function(){result4=[].slice.call(arguments).concat(this)}
	e.registerEvent("e1");
	e.registerEvent("e2");
	e.on("e1",f1)
	e.once("e2",f2)
	e.on("e3",f1)
	e.once("e3",f2)
	
	e.fire("e1",1,2,3)
	e.fire("e2",1,5,7)
	e.fire("e3",false)
	test.ok(e._events.hasOwnProperty("e3")===false && result1[3]===e && JSON.stringify(result1.slice(0,3))===JSON.stringify([1,2,3]) && JSON.stringify(result2.slice(0,3))===JSON.stringify([1,5,7]),
		"on() and once() gets fired with event and correct this is passed along"
	);
	e.on("e1",f3,other);
	e.once("e2",f4,me);
	e.fire("e1",1)
	e.fire("e2",2)
	test.ok(result1[0]===1 && result1[1]===e && JSON.stringify(result2.slice(0,3))===JSON.stringify([1,5,7]) 
		&& result3[0]===1 && result3[1]===other && result4[0]===2 && result4[1]===me,
		"once get's only fired once gets fired with event and correct this is passed along"
	);
	e.off("e1",f1)
	e.off("e1",f3)
	e.off("e3",f4)
	test.ok(e._events["e1"].listeners.length===0  && e._events["e2"].listeners.length===0,
		"off() works as expected"
	);
	test.end();
});
