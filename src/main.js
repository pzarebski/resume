import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import easing from 'easing'
import gauge from './utils/jquery.gauge'
import fatnav from './utils/jquery.fatNav'
import slider from './utils/jquery.flexslider'
import smoothscroll from './utils/SmoothScroll.min.js'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

window.jQuery = jQuery

new Vue({
  el: '#app',
  render: h => h(App)
})

$(document).ready(function (){
  $("#gauge1").gauge(90,{color: "#ff4f81",unit: " %",type: "halfcircle"});
  $("#gauge2").gauge(70, {color: "#2dde98", unit: " %",type: "halfcircle"});
  $("#gauge3").gauge(75, {color: "#00aeff",unit: " %",type: "halfcircle"});
  $("#gauge4").gauge(40, {color: "#ffb900",unit: " %",type: "halfcircle"});

  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

(function() {			
  $.fatNav();
}());