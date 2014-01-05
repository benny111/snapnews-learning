window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
            	/*"js/news.js",*/
                "js/jquery.min.js",
                "js/jquery.tmpl.js",
                "js/sizzle.js",
                "js/bootstrap.js",
                

            ],
            
            complete : function() {
                     var news = [{"photo":"2009.jpg","title":"天燈"},
                            {"photo":"2009.jpg","title":"天燈"}];

                            $('#tmpl-news').tmpl(news).appendTo( "#end" );
               /* $(cover).hover( function(){ alert("Ready....");});*/
            //    $(cover).hover(GameModule.test());
                /*$(cover).click(EventHandler.click());*/

            }
        }
    ]);

}, false);
