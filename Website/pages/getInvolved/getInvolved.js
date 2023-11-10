window.addEventListener('DOMContentLoaded', () => {

  reCenterForm();

  $(window).resize(function() {
    reCenterForm();
  })

});

function reCenterForm(){

  document.getElementById('form').style.paddingLeft = (window.innerWidth - 650)/2 + "px";
}
