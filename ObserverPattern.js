function ObserverList(){
this.observerList = [];
}

ObserverList.prototype.add = function( obj ){
return this.observerList.push( obj );
};

ObserverList.prototype.count = function(){
return this.observerList.length;
};

ObserverList.prototype.get = function( index ){
if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
}
};

ObserverList.prototype.indexOf = function( obj, startIndex ){
var i = startIndex;

while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
    return i;
    }
    i++;
}

return -1;
};

ObserverList.prototype.removeAt = function( index ){
this.observerList.splice( index, 1 );
};

// Subject Model
function Subject(){
this.observers = new ObserverList();
}

Subject.prototype.addObserver = function( observer ){
this.observers.add( observer );
};

Subject.prototype.removeObserver = function( observer ){
this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

Subject.prototype.notify = function( context ){
var observerCount = this.observers.count();
for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
}
};

// Example for a stock web app that publishes new stock updates.

// Return the current local time to be used in our UI later
getCurrentTime = function (){
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDay(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase();

        return (`${m}/${d}/${y} ${t}`)
}

function addGridRow (data) {
    console.log("updated grid component with :" + data);
}

function updateCounter( data ) {
    console.log( "data last updated at: " + getCurrentTime() + " with " + data);
}

gridUpdate = function( topic, data ){
    if ( data !== undefined ) {
        addGridRow( data );
        updateCounter( data );
    }
};

var subscriber = pubsub.subscribe( "NewDataAvailable", gridUpdate)

pubsub.publish( "newDataAvailable", {
    summary: "Apple made $5 billion",
    identifier: "APPL",
    stockPrice: 570.91
  });
   
  pubsub.publish( "newDataAvailable", {
    summary: "Microsoft made $20 million",
    identifier: "MSFT",
    stockPrice: 30.85
  });


