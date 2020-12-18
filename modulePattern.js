let MyModule = {
    myProperty: "someValue",

    // We can also include methods within the object.
    myConfig: {
        useCaching: true,
        language: 'en'
    },

    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?")
    },

    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "Yes" : "No"))
    },

    // We can also override the current configuration
    updateMyConfig: function( newConfig ) {
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log( this.myConfig.language);
        }
    }
};

// The Module Pattern only uses this way of the object literal as the return value from a scoping function

// Example of using the object literal to create a Module Pattern
var testModule = (function () {
    var counter = 0;

    return {
        incrementCounter: function () {
            return counter++;
        },

        resertCounter: function() {
            console.log( "counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

// Usage:

// Increment our Counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

// Revealing Module Pattern
var myRevealingModule = (function () {
    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log( "Name:" + privateVar);
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    // Reveal public pointers to private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    }
})();

// Creatiion of a Singleton class.
var mySingleton = (function () {
    var instance;

    function init() {
        //Singleton

        function privateMethod(){
            console.log( "I am private" );
        }

        var privateVariable = "I'm also private";

        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log("The public can see me!");
            },

            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})