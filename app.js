/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;
article3 = $('li.article-item featured').next().toggleClass('article-item featured',true);add class 'featured' it to Article #3
article2 = $('li').toggleClass('article-item featured',false);//remove the class 'featured' from Article #2
//------------------------------------------------------------------------------------------------

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-list').children().first().find('a').attr('href','#1');
//-------------------------------------------------------------------------------------------

/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.articles').css( "font-size", "20px" );// your code goes here!

//-----------------------------------------------------------------------------------------------------

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val,h1;
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);// Your code goes here!
});

//-----------------------------------------------------------------------------------------------------------
var family1 = $( "#family1" );

var family2=$("<div id='family2'><h1>Family2</h1></div>");
var bruce=$("<div id='bruce'><h2>Bruce</h2></div>");
var child=$("<div id='madison'><h3>Madison</h3></div>");
var family=$("<div id='hunter'><h3>Hunter</h3></div>");

family2.insertAfter(family1);
$("#family2").prepend(bruce);
$("#bruce").append(child);
$("#bruce").prepend(family);
//---------------------------------------------------------------------------------------------------------------

/*For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val,h1;
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);// Your code goes here!
});
//-------------------------------------------------------------------------------------
/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").children("ul").remove();
// your code goes here!
//------------------------------------------------------------------------------------------
/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
$( "p" ).each(function( index ) {
  var f1,f2;
  f1 = $(this).text();
  f2 = f1.length;
  $(this).text($(this).text()+""+f2);
});

