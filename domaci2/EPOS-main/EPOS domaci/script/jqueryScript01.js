$(".paragraf").show(1500);

$(".li1").show(2500);
$(".li2").show(3000);
$(".li3").show(3500);
$(".li4").show(4000);
$(".li5").show(4500);

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