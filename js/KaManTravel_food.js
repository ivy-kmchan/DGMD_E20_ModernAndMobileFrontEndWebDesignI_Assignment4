/* KaManTravel_food.js is for KaManTravel_food.html */

$(function() {
  	// interaction - sortable
  	$("#sortable" ).sortable();
    $("#sortable" ).disableSelection();
    // click foodPhotos in sortable and pulsate
    $(".foodPhoto").click(function(){
      $(this).effect("pulsate", {times:1}, 500);
    }); //end click


    // widget - tabs
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
    // click tabs and shake
    $("#tabs").click(function(){
      $(this).effect("shake", {times:1}, 1000);
    }); //end click
    

    // show and hide dialog box
    $("#dialog").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 300
      },
      hide: {
        effect: "explode",
        duration: 300
      }
    }); // end show and hide dialog box

    // effect - toggleClass. double-click foodPhotos, open dialog box and toggleclass
    $(".foodPhoto").dblclick(function(){
      // open and close dialog box
      $("#dialog").dialog( "open" ); // open dialog box
      setTimeout("$('#dialog').dialog('close')",2000); // close dialog box automatically
      // toggleclass for food photos
      $(this).toggleClass("smallFoodPhoto", 2000, "easeOutBounce"); 
    }); // end double click

}); // end function