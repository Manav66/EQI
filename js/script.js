'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
  item.addEventListener('click', function () {
    switchers.forEach(item => item.parentElement.classList.remove('is-active'))
    this.parentElement.classList.add('is-active')
  })
})

$(function () {
  $('.link').on('click', function () {
    $('.span2').addClass('open');
  });
});

function apicall(){
  var val = document.getElementById('searchaqi').value;
  _aqiFeed({  city:val,  lang:"en",  callback:function(aqi){  
    $("#aqi-details").html(aqi.details);  
  }  });
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'mouseenter', function() {
    card.classList.toggle('is-flipped');
  });
});

function cityapi(val){
  console.log(val);
  _aqiFeed({  city:val,  lang:"en",  callback:function(aqi){  
    $('.city-back').html(aqi.details);  
  }  });

} 



      
      