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