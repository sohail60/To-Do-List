// On clicking the tasks
$("ul").on("click","li",function(){
    console.log("Hiii");
    
    // if the task is already gray
    if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({       // making object for making changes
            color: "black",
            textDecoration: "none"

        // We could also have written it like this.
        // $(this).css("color","gray");
        // $(this).css("textDecoration","line-through");
        });
    } else{
        // make the task black
        $(this).css({
            color: "gray",
            textDecoration: "Line-through"
        });
    }

    // We could write this instead
    // $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
    event.stopPropagation();
});

$("#input").on("keypress",function(event){
    console.log("Typed");
    if (event.which===13){
        let todoText=$(this).val();
        $(this).val("");
        if(todoText.trim()!==""){
            $("ul").append("<li><span><i class='fa-solid fa-trash-can'></i></span>"+todoText+"</li>");
        }
    }
});

$(".fa-plus").on("click",function(){
    $("#input").fadeToggle();
})