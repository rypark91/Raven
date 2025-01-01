var position = 0;
$(function(){
    $(window).scrollTop(0);
    $("#manual").on("click", function(){
        $("#buttonContainer").css("display","none");
        $("body, html").css("height", "29000px");
        $(".container").css("display","block");
        
    });
    $("#auto").on("click", function(){
        $("#buttonContainer").css("display","none");
        $("body, html").css("height", "29000px");
        $(".container").css("display","block");
        $(window).on("touchmove",false);
        setInterval(function(){
            $(window).scrollTop(position);
            position += 1;
        },1);
    });
    $(window).on("scroll", function(){
        

        
        var scrollPosition = Number($(this).scrollTop());

            $("#intro").css("opacity", String((300 - scrollPosition) / 200));
       
            $("#card1").css("top",String(900 - scrollPosition) + "px");
           
            $("#card2").css("top",String(2450 - scrollPosition) + "px");
            
            $("#card3").css("top",String(4000 - scrollPosition) + "px");

            $("#card4").css("top",String(5550 - scrollPosition) + "px");

            $("#card5").css("top",String(7100 - scrollPosition) + "px");
            
            $("#card6").css("top",String(8650 - scrollPosition) + "px");

            $("#card7").css("top",String(10200 - scrollPosition) + "px");

            $("#card8").css("top",String(11750 - scrollPosition) + "px");
            
            $("#card9").css("top",String(13300 - scrollPosition) + "px");

            $("#card10").css("top",String(14850 - scrollPosition) + "px");
            
            $("#card11").css("top",String(16400 - scrollPosition) + "px");
            
            $("#card12").css("top",String(17950 - scrollPosition) + "px");
           
            $("#card13").css("top",String(19500 - scrollPosition) + "px");

            $("#card14").css("top",String(21050 - scrollPosition) + "px");

            $("#card15").css("top",String(22600 - scrollPosition) + "px");
        
            $("#card16").css("top",String(24150 - scrollPosition) + "px");

            $("#card17").css("top",String(25700 - scrollPosition) + "px");
        
            $("#card18").css("top",String(27250 - scrollPosition) + "px");
        

    });
});
