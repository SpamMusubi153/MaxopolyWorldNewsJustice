
window.addEventListener('DOMContentLoaded', () => {
  updateWindow();

  $(window).resize(function() {
    updateWindow();
  })

});


//window.onscroll = transitionContent();

function updateWindow(){
  ajustSizing();

}

function ajustSizing(){

  // Determine the Width and Height of the Window
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Set the Properties of the Title
  document.getElementById("primaryTitle").style.width = width + "px";

  document.getElementById("scroll").style.paddingLeft = (width - 175)/2 + "px";

  //document.getElementById("bottomIcon").style.paddingLeft = (width - 35)/2 + "px";

  // Set the Properties of the Buttons
  var fourthWidth = width / 4;
  var sixteenthWidth = fourthWidth / 4;
  document.getElementsByClassName('button')[0].style.borderSpacing = sixteenthWidth + "px";
  document.getElementsByClassName('button')[0].style.width = fourthWidth + "px";
  document.getElementsByClassName('button')[0].style.height = fourthWidth + "px";
  document.getElementsByClassName('button')[1].style.borderSpacing = sixteenthWidth + "px";
  document.getElementsByClassName('button')[1].style.width = fourthWidth + "px";
  document.getElementsByClassName('button')[1].style.height = fourthWidth + "px";
  document.getElementsByClassName('button')[2].style.borderSpacing = sixteenthWidth + "px";
  document.getElementsByClassName('button')[2].style.width = fourthWidth + "px";
  document.getElementsByClassName('button')[2].style.height = fourthWidth + "px";
  document.getElementById('links').style.borderSpacing = sixteenthWidth/2 + "px";



  //alert(width);
};

function transitionContent(){
  if(window.pageYOffset > 50){
    $(".overlay").fadeOut();
    $(".primaryTitle").fadeOut();
    $(".scroll").fadeOut();

    /*$(".menuLeft").animate({
      backgroundColor: "#d1d1d1"
    });
    $(".menuRight").animate({
      backgroundColor: "#d1d1d1"
    });*/

  } else if(window.pageYOffset < 5000){
    $(".overlay").fadeIn();
    $(".primaryTitle").fadeIn();
    $(".scroll").fadeIn();

    /*$(".menuLeft").animate({
      backgroundColor: "white"
    });
    $(".menuRight").animate({
      backgroundColor: "white"
    });*/
  }

}
