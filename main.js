$(document).ready(function() {
    console.log( "ready!" );

    var container = $('.container')
    $('#text-input').focus();
    $('#quote-panel').hide();
    $('#error-panel').hide();

     $('#text-input').change(function(){
       var query = $('#text-input').val();
       console.log(query);
       var listing = $.get('https://www.reddit.com/r/quotes/search.json?q='+ query + '&sort=new&restrict_sr=true',
       function(listing){
         if(listing.data.children.length >0){
           var entry = listing.data.children[0].data;
           var quote = entry.selftext_html;
           var title = entry.title;
           $('#quote-panel').show();
           $('#error-panel').hide();
          $('#title').html($('<div />').html(title).text());
          $('#quote').html($('<div />').html(quote).text());
          console.log($('<div />').html(quote).text());
         } else {
           $('#quote-panel').hide();
           $('#error-panel').show();
           $('#error').text("Oops - try again. That's not a keyword.")
      }
        });
     })




});
