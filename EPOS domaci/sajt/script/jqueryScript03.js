$(".slika1").show(1000);
$(".slika2").show(1000);
$(".slika3").show(2000);
$(".slika4").show(2000);
$(".slika5").show(3000);
$(".slika6").show(3000);

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