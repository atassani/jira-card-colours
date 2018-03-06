// ==UserScript==
// @name         JIRA card colours
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  In JIRA RapidBoard, extend the color of the band to the whole card.
// @match        https://jira.*/jira/secure/RapidBoard.jspa*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==
waitForKeyElements (".js-detailview", colorizeCards);

function colorizeCards(){
    $("div.js-detailview").each(function(){
      var bg_color = $(this).children(".ghx-grabber").first().css("background-color");
      if(bg_color !== "" && typeof(bg_color) != "undefined"){
          bg_color = bg_color.splice(3, 0, "a"); //change from rgb to rgba
		  bg_color = bg_color.splice(bg_color.length-1, 0, ", 0.4"); //insert an alpha
		  $(this).css("background-color", bg_color);
      }
    });
}

String.prototype.splice = function(index, count, add) {
  if (index < 0) {
    index = this.length + index;
    if (index < 0) {
      index = 0;
    }
  }
  return this.slice(0, index) + (add || "") + this.slice(index + count);
};
