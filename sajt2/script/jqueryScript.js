$(".surname").on("focus blur",function(event){
        if (event.type=="focus") {
        $(this).css("border","8px solid rgb(50, 129, 194)");
       }else{
        $(this).css("border","1px solid black");
        }
     });
     $("#fon").on("focus blur",function(event){
        if (event.type=="focus") {
        $(this).css("border","8px solid rgb(50, 129, 194)");
       }else{
        $(this).css("border","1px solid black");
        }
     });
     $(".napomena").on("focus blur",function(event){
        if (event.type=="focus") {
        $(this).css("border","8px solid rgb(50, 129, 194)");
       }else{
        $(this).css("border","1px solid black");
        }
     });
     $(".placanje").on("focus blur",function(event){
        if (event.type=="focus") {
        $(this).css("border","8px solid rgb(50, 129, 194)");
       }else{
        $(this).css("border","1px solid black");
        }
     });