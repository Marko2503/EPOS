 // $(".paragraf:eq(0)").toggle(2000);//toggle je prikazi i sakri  jedno u drugom
   // $(".paragraf1").fadeIn(2000);
   // $(".paragraf:eq(0)").fadeOut(2000);
   // $(".paragraf:eq(2)").fadeTo(2000,0.5);
 //   $(".paragraf1").Toggle(2000);
  // $(".paragraf1").slideDown(2000);
$(".paragraf:eq(0)").on("click", function(){
    $(".paragraf:eq(0)").css("color","rgb(176, 141, 87)");
});
$(".paragraf:eq(1)").on("click", function(){
    $(".paragraf:eq(1)").css("color","goldenrod");
});
$(".paragraf:eq(2)").on("click", function(){
    $(".paragraf:eq(2)").css("color","rgb(37, 204, 101)");
});

$(window).scroll(function() {

  if ($(this).scrollTop() > 600) {

    $(".scrollup").fadeIn();

  } else {

    $(".scrollup").fadeOut();

  }
})

$(".scrollup").click(function() {

  $("html, body").animate({

    scrollTop: 0

  }, 600);

  return false;

})
