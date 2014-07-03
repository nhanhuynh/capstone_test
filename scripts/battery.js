$.ajaxSetup( {
    xhr: function() {
        return new window.XMLHttpRequest( {
            mozSystem: true
        } );
    }
} );
/**
 @function fetch the news conditionally based on the number of stories specified and country
 @param {int} num   - num of stories
 */
fetchNews(5);
function fetchNews(num) {

    //query country code
    $.get("http://ipinfo.io/json", function (data) {
        country= data.country;
        country = vn;
        document.getElementById("test").innerHTML = data.country;
        //construct the URL
        url = "http://news.google.com/news/feeds?pz=2&cf=all&ned="+country+"&hl=en&output=rss&num="+num;
        //get the stories from google news
        $.get(url,function(data){
            var title = "";
            //parse the feed
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                title = el.find("description").text();
            });
            document.getElementById("test1").innerHTML = title;
        })
 //
 });
 }
 /* var jqxhr = $.ajax("http://www.simpleweb.org/")
 .done(function (data) {
 document.getElementById("test").innerHTML = data;
 })
 }
*/