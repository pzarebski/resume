import Vue from 'vue'
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

import App from './App.vue'
import topnavbar from './components/topnavbar.vue'
import banner from './components/banner.vue'
import aboutme from './components/aboutme.vue'
import services from './components/services.vue'
import skills from './components/skills.vue'
import gallery from './components/gallery.vue'
import stats from './components/stats.vue'
import experience from './components/experience.vue'
import comments from './components/comments.vue'
import resumefooter from './components/footer.vue'

window.jQuery = jQuery

Vue.component('topnavbar', topnavbar);
Vue.component('banner', banner);
Vue.component('aboutme', aboutme);
Vue.component('services', services);
Vue.component('skills', skills);
Vue.component('gallery', gallery);
Vue.component('stats', stats);
Vue.component('experience', experience);
Vue.component('comments', comments);
Vue.component('resumefooter', resumefooter);

new Vue({
  el: '#app',
  render: h => h(App)
})

$(document).ready(function (){
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