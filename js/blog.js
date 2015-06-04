$(function() {
 
    Parse.$ = jQuery;
 
  	Parse.initialize("SfzcjIxCxeNmXxhxZeMFWwToy9O5gDpm6DeD4dEa", "sjxy2Ws36g8BhjTv6FUJ2Bvcmgjq5I23TYhieOQN");
  	
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});