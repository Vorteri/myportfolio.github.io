$(document).ready(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });
});

$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
	
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    dragElement.parents().on("mousemove touchmove", function(e) {
    	
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      leftValue = moveX + posX - dragWidth;
      
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}
$(".price-btn_1").click(function() {
  $("#price-table_1").text("от 30мин.");
  $("#price-table_2").text("1 990₽");
  $("#price-table_3").text("990₽ - 1 390₽");
  $("#price-table_4").text("25-50%");
  $("#price-table_5").text("20 мин.");
  $("#price-table_6").text("600₽");
  $("#price-table_7").text("1 000₽ - 1 300₽");
  $("#price-table_8").text("50-60%");
  $("#price-table_10").text("290₽");
  $("#price-table_11").text("390₽ - 690₽");
  $("#price-table_12").text("42-60%");
  $("#price-table_13").text("2 часа");
  $("#price-table_14").text("450₽");
  $("#price-table_15").text("990₽ - 1 200₽");
  $("#price-table_16").text("85-96%");
  $("#price-table_19").text("990₽ - 1 200₽");
  $("#price-table_20").text("85-96%");
  $("#price-table_21").text("1 день");
  $("#price-table_22").text("1 200₽");
  $("#price-table_23").text("1 190₽ - 1 390₽");
  $("#price-table_24").text("83-98%");
  $("#price-table_25").text("от 1 часа");
  $("#price-table_26").text("590₽");
  $("#price-table_27").text("1 800₽ - 2 020₽");
  $("#price-table_28").text("50-70%");
  $("#price-table_29").text("от 3 часов");
  $("#price-table_30").text("890₽");
  $("#price-table_31").text("990₽ - 1 250₽");
  $("#price-table_32").text("60-75%");
  $("#price-table_33").text("от 1 часа");
  $("#price-table_34").text("1 390₽");
  $("#price-table_35").text("1 190₽ - 1 390₽");
  $("#price-table_36").text("50-60%");
  $("#price-table_37").text("От 30мин");
  $("#price-table_38").text("600₽");
  $("#price-table_39").text("790₽ - 1 100₽");
  $("#price-table_40").text("30-40%");
  $("#price-table_41").text("от 1 часа");
  $("#price-table_42").text("1 200₽");
  $("#price-table_43").text("1 390₽ - 1 450₽");
  $("#price-table_44").text("70-80%");
  $("#price-table_45").text("1 час");
  $("#price-table_46").text("1 090₽");
  $("#price-table_47").text("1 990₽ - 2 290₽");
  $("#price-table_48").text("60-65%");
  $("#price-table_49").text("от 30мин.");
  $("#price-table_50").text("690₽");
  $("#price-table_51").text("990₽ - 1 390₽");
  $("#price-table_52").text("25-50%");
  $("#price-table_53").text("20 мин.");
  $("#price-table_54").text("850₽");
  $("#price-table_55").text("1 400₽ - 1 630₽");
  $("#price-table_56").text("30-50%");
  $("#price-table_57").text("от 4 дней");
  $("#price-table_58").text("2 600₽");
  $("#price-table_59").text("3 200₽ - 3 500₽");
  $("#price-table_60").text("50-55%");
  $("#price-table_61").text(" ‾ ‾ ‾ ");
  $("#price-table_62").text("1 900₽");
  $("#price-table_63").text("1 890 - 2 190");
  $("#price-table_64").text("60-70%");
  $("#price-table_65").text(" ‾ ‾ ‾ ");
  $("#price-table_66").text("690₽");
  $("#price-table_67").text("1 130₽ - 1300₽");
  $("#price-table_68").text("50-70%");
  $("#price-table_69").text("от 3 часов");
  $("#price-table_70").text("800₽");
  $("#price-table_71").text("990₽ - 1200₽");
  $("#price-table_72").text("15-30%");
  $("#price-table_73").text(" ‾ ‾ ‾ ");
  $("#price-table_74").text("1 390₽");
  $("#price-table_75").text("1 300₽ - 1 520₽");
  $("#price-table_76").text("25-50%");
  $("#price-table_77").text(" ‾ ‾ ‾ ");
  $("#price-table_78").text("4 660₽");
  $("#price-table_79").text("8 230₽ - 10 340₽");
  $("#price-table_80").text("60-73%");
  $("#price-table_81").text(" ‾ ‾ ‾ ");
  $("#price-table_82").text("2 100₽");
  $("#price-table_83").text("2 800₽ - 3 200₽");
  $("#price-table_84").text("40-55%");
  $("#price-table_85").text(" ‾ ‾ ‾ ");
  $("#price-table_86").text("150₽");
  $("#price-table_87").text("1 550₽ - 1 650₽");
  $("#price-table_88").text("31-43%");
  $("#price-table_89").text(" ‾ ‾ ‾ ");
  $("#price-table_90").text("1130₽");
  $("#price-table_91").text("1 440 - 1 860");
  $("#price-table_92").text("18-25%");
});

$(".price-btn_2").click(function() {
  $("#price-table_1").text("от 2часов");
  $("#price-table_2").text("2 200₽");
  $("#price-table_3").text("2 290₽ - 2 690₽");
  $("#price-table_4").text("80-90%");
  $("#price-table_5").text("от 1 часа");
  $("#price-table_6").text("1 200₽");
  $("#price-table_7").text("1 400₽ - 1 500₽");
  $("#price-table_8").text("30-40%");
  $("#price-table_10").text("490₽");
  $("#price-table_11").text("490₽ - 890₽");
  $("#price-table_12").text("26-32%");
  $("#price-table_13").text("от 1 часа");
  $("#price-table_14").text("500₽");
  $("#price-table_15").text("770₽ - 820₽");
  $("#price-table_16").text("80-90%");
  $("#price-table_17").text("от 1 дня");
  $("#price-table_18").text("от 900₽");
  $("#price-table_19").text("1 290₽ - 1 690₽");
  $("#price-table_20").text("80-90%");
  $("#price-table_21").text("от 1 часа");
  $("#price-table_22").text("990₽");
  $("#price-table_23").text("1 490₽ - 1 890₽");
  $("#price-table_24").text("26-32%");
  $("#price-table_25").text("от 2 часов");
  $("#price-table_26").text("990₽");
  $("#price-table_27").text("1 770₽ - 1 820₽");
  $("#price-table_28").text("30-40%");
  $("#price-table_29").text("от 2 часов");
  $("#price-table_30").text("990₽");
  $("#price-table_31").text("1 290₽ - 1 690₽");
  $("#price-table_32").text("80-90%");
  $("#price-table_33").text("от 1 часа");
  $("#price-table_34").text("1 190₽");
  $("#price-table_35").text("1 400₽ - 1 500₽");
  $("#price-table_36").text("30-40%");
  $("#price-table_37").text("от 1 часа");
  $("#price-table_38").text("990₽");
  $("#price-table_39").text("1 490₽ - 1 890₽");
  $("#price-table_40").text("26-32%");
  $("#price-table_41").text("от 2 часа");
  $("#price-table_42").text("990₽");
  $("#price-table_43").text("1 770₽ - 1 820₽");
  $("#price-table_44").text("31-46%");
  $("#price-table_45").text("1 час");
  $("#price-table_46").text("990₽");
  $("#price-table_47").text("1 290₽ - 1 690₽");
  $("#price-table_48").text("80-90%");
  $("#price-table_49").text(" ‾ ‾ ‾ ");
  $("#price-table_50").text("990₽");
  $("#price-table_51").text("1 400₽ - 1 500₽");
  $("#price-table_52").text("30-40%");
  $("#price-table_53").text(" ‾ ‾ ‾ ");
  $("#price-table_54").text("990₽");
  $("#price-table_55").text("1 490₽ - 1 890₽");
  $("#price-table_56").text("26-32%");
  $("#price-table_57").text("‾ ‾ ‾ ");
  $("#price-table_58").text("2 990₽");
  $("#price-table_59").text("3 770₽ - 3 820₽");
  $("#price-table_60").text("31-46%");
  $("#price-table_61").text("‾ ‾ ‾ ");
  $("#price-table_62").text("2 990₽");
  $("#price-table_63").text("3 290₽ - 3 690₽");
  $("#price-table_64").text("80-90%");
  $("#price-table_65").text("‾ ‾ ‾ ");
  $("#price-table_66").text("990₽");
  $("#price-table_67").text("1 400₽ - 1500₽");
  $("#price-table_68").text("30-40%");
  $("#price-table_69").text("‾ ‾ ‾ ");
  $("#price-table_70").text("500₽");
  $("#price-table_71").text("690₽ - 890₽");
  $("#price-table_72").text("26-32%");
  $("#price-table_73").text("‾ ‾ ‾ ");
  $("#price-table_74").text("1 190₽");
  $("#price-table_75").text("1 770₽ - 1 820₽");
  $("#price-table_76").text("31-46%");
  $("#price-table_77").text("‾ ‾ ‾ ");
  $("#price-table_78").text("По запросу");
  $("#price-table_79").text("12 290₽ - 14 690₽");
  $("#price-table_80").text("80-90%");
  $("#price-table_81").text("‾ ‾ ‾");
  $("#price-table_82").text("1 900₽");
  $("#price-table_83").text("2 400₽ - 2 500₽");
  $("#price-table_84").text("30-40%");
  $("#price-table_85").text("‾ ‾ ‾");
  $("#price-table_86").text("300₽");
  $("#price-table_87").text("1 490₽ - 1 890₽");
  $("#price-table_88").text("26-32%");
  $("#price-table_89").text("‾ ‾ ‾");
  $("#price-table_90").text("990₽");
  $("#price-table_91").text("1 770₽ - 1 820₽");
  $("#price-table_92").text("31-46%");
  
});

$(".price-btn_all").click(function(){
 $(".price-btn_all").removeClass('active');
 $(this).toggleClass('active'); 
});

$(".nav-top__list").click(function(event){
event.preventDefault();
 var dest=0;
 if($(this.hash).offset().top > $(document).height()-$(window).height()){
  dest=$(document).height()-$(window).height();
 }else{
  dest=$(this.hash).offset().top;
 }
 $('html,body').animate({scrollTop:dest}, 1000,'swing');
});


$( ".logo" ).click(function() {
    location.reload();
});


$(function(){
 $('#from').timepicker({
    'minTime': '9:00',
    'maxTime': '20:00',
    'showDuration': false,
    'timeFormat': 'H:i',
    'step': '15'
});
});
$(function(){
 $('#to').timepicker({
    'minTime': '9:00',
    'maxTime': '20:00',
    'showDuration': false,
    'timeFormat': 'H:i',
    'step': '15'
});
});
$(document).ready(function(){
  $('.feedback-wrapper_btn').on("click", function(){
    $('.overlay').show();
     });
  $('.popup-close').on("click", function(){
    $('.overlay').hide();
      });
      });

$(document).ready(function(){
  $('.main-text_btn, .service-btn_one, .service-btn_two, .price-table_order_btn, .price-order_btn').on("click", function(){
    $('.overlay__two').show();
     });
  $('.popup-close').on("click", function(){
    $('.overlay__two').hide();
      });
      });
$(document).ready(function(){
  $('.review_btn').on("click", function(){
    $('.overlay__three').show();
     });
  $('.popup-close').on("click", function(){
    $('.overlay__three').hide();
      });
      });
$(document).ready(function(){
  $('.btn').on("click", function(){
    $('.menu-link').hide();
      });
  $('.popup-close').on("click", function(){
    $('.menu-link').show();
      });
      });

$(".feedback-wrapper_btn").click(function() {
    $(".popup__title").text("заказать обратный звонок");
});

$(".main-text").click(function() {
    $(".popup__title").text("Заявка на диагностику без очереди");
    $(".popup__btn").text("Отправить!");
});

$(".service-btn_one").click(function() {
    $(".popup__title").text("Вызвать мастера к себе");
    $(".popup__btn").text("Отправить!");
});
$(".service-btn_two").click(function() {
    $(".popup__title").text("узнать стоимость ремонта");
    $(".popup__btn").text("Узнать стоимость!");
});
$(".price-table_order_btn").click(function() {
    $(".popup__title").text("получить скидку на ремонт");
    $(".popup__btn").text("Получить скидку!");
});
$(".price-order_btn").click(function() {
    $(".popup__title").text("бесплатная консультация");
    $(".popup__btn").text("Отправить!");
});
$(".review_btn").click(function() {
    $(".popup__title").text("оставить свой отзыв о сервисе");
    $(".popup__btn").text("Оставить отзыв!");
});
$(function($){
 $("#numb1, #numb2, #numb3, #numb4, #numb5, #numb6, #numb7").mask("+7(999) 999-9999");
   });

$(document).ready(function(){
 var link = $('.menu-link');
 var link_active = $('.menu-link_active');
 var menu = $('.nav-top__mobile');
 var nav_link = $('.nav-top__mobile a');
 
 link.click(function(){
  link.toggleClass('menu-link_active');
  menu.toggleClass('menu_active');
 });
  nav_link.click(function(){
   link.toggleClass('menu-link_active');
   menu.toggleClass('menu_active')
 });
});