/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;
article3 = $('li.article-item featured').next().toggleClass('article-item featured',true);add class 'featured' it to Article #3
article2 = $('li').toggleClass('article-item featured',false);//remove the class 'featured' from Article #2


