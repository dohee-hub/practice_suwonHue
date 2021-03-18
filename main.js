//menuBtn
const btn = document.querySelector(".menuIcon"),
     menu = document.querySelector(".menuList");

btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

//notice tab
const noticeTab = $(".notice");
noticeTab.find("ul > li > ul").hide();
noticeTab.find("li.active > ul").show();

function notice(event){
    event.preventDefault();
    const target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
}
noticeTab.find("ul > li > a").click(notice).focus(notice);

//bannerSlide
var current=0;
var $interval;

function timer(){
  var $interval=setInterval(function(){slide()},5000);                        
}

function slide(){
  $(".slideItem").animate({left:"-=1024px"},8000,function(){
    $(this).css({"left":0});
    $(".slideItem").append( $("ul").children("li").eq(0) );
  });    
  current++;
  if(current==12)current=0;
}   
timer();