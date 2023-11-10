
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

  //document.getElementById("bottomIcon").style.paddingLeft = (width - 35)/2 + "px";

  // Set the Properties of the Buttons
  var fourthWidth = width / 4;
  var sixteenthWidth = fourthWidth / 4;

  for(var i = 0; i < document.getElementsByClassName('text').length; i++){

    document.getElementsByClassName('text')[i].style.width = fourthWidth * 3 + "px";
  }

  document.getElementsByClassName('button')[0].style.width = fourthWidth + "px";
  document.getElementsByClassName('button')[0].style.height = fourthWidth + "px";



  //alert(width);
};


function showContent(){
  console.log($(".text:eq('0')").style.opacity);
  for(var i = 0; i <= $(".text").length; i++){
    if(checkVisibility($(".text:eq("+i+")").height())){
      $(".text:eq("+i+")").fadeOut(1).fadeIn(1000);
      console.log("IN!");
    } else{
      //$(".text:eq("+i+")").show().fadeOut();
    }
  }
}

function checkVisibility(elementHeight){
  if(!(window.pageYOffset >= elementHeight - $(window).height() + 400) && (window.pageYOffset >= elementHeight - $(window).height())){
    return true;
  } else{
    return false;
  }
}
