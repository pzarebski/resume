<template>    
	<div class="gallery" id="gallery">
		<div class="container">
		<div class="about-head text-center ">
		<h3 class="text-center">My Projects<a href="#gallery"></a></h3>
		</div>	
			<div class="gallery-info">
				<galleryitem :image="p1img" />
				<galleryitem :image="p2img" />
				<galleryitem :image="p3img" />
				<galleryitem :image="p4img" />
				<galleryitem :image="p5img" />
				<galleryitem :image="p6img" />
				<galleryitem :image="p7img" />
				<galleryitem :image="p8img" />
				<galleryitem :image="p9img" />
				<galleryitem :image="p10img" />
				<galleryitem :image="p11img" />
				<galleryitem :image="p12img" />
				
				<div class="clearfix"> </div>	
			</div>
		</div>
    </div>
</template>

<script>
import p1 from "./../assets/images/p1.jpg";
import p2 from "./../assets/images/p2.jpg";
import p3 from "./../assets/images/p3.jpg";
import p4 from "./../assets/images/p4.jpg";
import p5 from "./../assets/images/p5.jpg";
import p6 from "./../assets/images/p6.jpg";
import p7 from "./../assets/images/p7.jpg";
import p8 from "./../assets/images/p8.jpg";
import p9 from "./../assets/images/p9.jpg";
import p10 from "./../assets/images/p10.jpg";
import p11 from "./../assets/images/p11.jpg";
import p12 from "./../assets/images/p12.jpg";
import galleryitem from "./gallery.item.vue";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      p1img: p1,
      p2img: p2,
      p3img: p3,
      p4img: p4,
      p5img: p5,
      p6img: p6,
      p7img: p7,
      p8img: p8,
      p9img: p9,
      p10img: p10,
      p11img: p11,
      p12img: p12
    };
  },
  components: {
    galleryitem
  }
};
</script>
