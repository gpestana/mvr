// Load is used to ensure all images have been loaded, impossible with document

var container


//the result should be an array with 10 entries coming from the server side

//result of an hypothetical request 
var res = [
  {EAN: '9780316087919',
  author: 'David H. Freedman',
  title: 'Wrong: Why experts* keep failing us--and how to know when not...',
  url:
'http://www.amazon.com/Wrong-us-Scientists-relationship-consultants/dp/B005DI6QAM%3FSubscriptionId%3DAKIAIWHXC5LMOKXKM2KA%26tag%3D4949-1705-1385%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB005DI6QAM?tag=minimumviable-20',
  reviews: ["This is a cool one.."],
  loves: 0,
  img: 'http://ecx.images-amazon.com/images/I/41pZss7iBPL.jpg'}
]


//appends elements in array els to the layout
var append = function(els) {
  els.forEach(function(el) {
    parseEntry(el, function(parsed){
      $('#posts:last-child').append(parsed)
    })
    
  })
  container.masonry('reloadItems').masonry('layout')
 }


var parseEntry = function(raw, cb) {
  var start = "<div class='post'>" 
  var img = "<img src='"+raw.img"'>"
  var rev = "<p>"+raw.reviews[0]+"<p>"
  var panel = "<div><a id='love' href='#'><3</a><a href='#'>+ wishlist</a>"
  var panel_buy = "<a href='"+raw.url+"'>buy now</a></div>"
  var finish = "</div>"
  
  var parsed = start+img+rev+panel+panel_buy+finish 
  cb(parsed)
}


var loadMore = function() {
  //just testing
  append(res)
}

//triggers loadMore() at the end of the page
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      loadMore()  
  }
});




jQuery(window).load(function () {
  // Takes the gutter width from the bottom margin of .post

  var gutter = parseInt(jQuery('.post').css('marginBottom'));
  container = jQuery('#posts');


  // Creates an instance of Masonry on #posts

  container.masonry({
    gutter: gutter,
    itemSelector: '.post',
    columnWidth: '.post',
    transitionDuration: '0.1s',
  });
  
   //appends first elements
  //initLayout()
  
  // This code fires every time a user resizes the screen and only affects .post
  // elements
  // whose parent class isn't .container. Triggers resize first so nothing looks
  // weird.
  
  jQuery(window).bind('resize', function () {
    if (!jQuery('#posts').parent().hasClass('container')) {
      
      // Resets all widths to 'auto' to sterilize calculations
      
      post_width = jQuery('.post').width() + gutter;
      jQuery('#posts, body > #grid').css('width', 'auto');
      
      
      
      // Calculates how many .post elements will actually fit per row. Could
      // this code be cleaner?
      
      posts_per_row = jQuery('#posts').innerWidth() / post_width;
      floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
      ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
      posts_width = (ceil_posts_width > jQuery('#posts').innerWidth()) ?
floor_posts_width : ceil_posts_width;
      if (posts_width == jQuery('.post').width()) {
        posts_width = '100%';
      }
      
      
      // Ensures that all top-level elements have equal width and stay centered
      
      jQuery('#posts, #grid').css('width', posts_width);
      jQuery('#grid').css({'margin': '0 auto'});
    
    }
  }).trigger('resize');
  


});
