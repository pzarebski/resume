<template>    
	<div class="gallery" id="gallery">
		<div class="container">
		<div class="about-head text-center ">
		<h3 class="text-center">My Projects</h3>
		</div>	
			<div class="gallery-info">
				<div class="col-md-3 gallery-grids">
					<a href="images/p1.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p1img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p2.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p2img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p3.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p3img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p4.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p4img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p5.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p5img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p6.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p6img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p7.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p7img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p8.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p8img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p9.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p9img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p10.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p10img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p11.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p11img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
				<div class="col-md-3 gallery-grids">
					<a href="images/p12.jpg" class="gallery-box" data-lightbox="example-set" data-title="">
						<img :src="p12img" alt="" class="img-responsive zoom-img">
					</a>
				</div>
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
    }
}
</script>
