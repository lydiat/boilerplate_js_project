var app = {

    globalVar: "foo",
    globalVarInt: 0,

    init: function() {

        window.addEventListener("DOMContentLoaded", app.doTheThing, false);

    },

    doTheThing: function() { // comment about function

        console.log('did it!');
        app.doTheOtherThing(elem);

    },

    doTheOtherThing: function(elem) { // comment about function
        console.log('did this too!');

    }

};

(function() {
    "use strict";
    app.init();
})();
