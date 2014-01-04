window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
            	"js/game.js",
                "js/jquery.min.js",
                "js/sizzle.js",
                "js/event_handle.js",

            ],
            complete : function() {
               /* $(cover).hover( function(){ alert("Ready....");});*/
                $(cover).hover(GameModule.test());
                /*$(cover).click(EventHandler.click());*/
            }
        }
    ]);

}, false);