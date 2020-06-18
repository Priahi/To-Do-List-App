// Check off todos
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function() {
   $(this).parent().fadeOut(500, function() {
       $(this).remove();
   });
});

//toggle placeholder
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});

//add todo
$("input").on("keypress", function(event) {
   if (event.which === 13) { //enter sign
       var todoText = $(this).val();
       $(this).val("");
       $('ul').append("<li><span class=\"fa fa-trash\"></span> " + todoText + "</li>");
   }
});