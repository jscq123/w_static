/*侧边栏遮罩*/
$(function() {    
        FastClick.attach(document.body);
        opt.fixViewportWidth(640);
});
    $(".btn").on("click",function(){
            $(".us-area").animate({"left": "248px"},200);
            $('.mainboxbg').css("display", "block");
        })
        $(".mainboxbg").on("click",function(){
            $(".us-area").animate({"left": "0"},200);
            $('.mainboxbg').css("display", "none");
        })

/*侧边栏遮罩*/






