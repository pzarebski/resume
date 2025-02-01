import { createApp } from 'vue'
import jQuery from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import easing from 'easing'
import gauge from './utils/jquery.gauge'
import fatnav from './utils/jquery.fatNav'
import slider from './utils/jquery.flexslider'
import smoothscroll from './utils/SmoothScroll.min.js'

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

const app = createApp(App)

app.component('topnavbar', topnavbar);
app.component('banner', banner);
app.component('aboutme', aboutme);
app.component('services', services);
app.component('skills', skills);
app.component('gallery', gallery);
app.component('stats', stats);
app.component('experience', experience);
app.component('comments', comments);
app.component('resumefooter', resumefooter);

app.mount('#app');

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