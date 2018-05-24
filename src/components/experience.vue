<template>
	<section class="experience" id="experience">
		<div class="container">
			<h3 class="text-center">Work Experience</h3>
			<div class="col-md-5 exp_left">
				<img :src="shindeyjpg" alt="" />
			</div>
			<div class="col-md-7 exp_right">
				<h3>My Experience</h3>
				<p>Morbi imperdiet scelerisque felis, eget auctor libero eleifend nec. 
				Curabitur a aliquet justo. Etiam et ullamcorper dolor. Nam pulvinar accumsan congue.
				Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				<div class="exp_grids">
					<div class="exp_grid1">
						<h4>Senior web developer in x company</h4>
						<h5>2015-2017</h5>
						<p>Aliquam dignissim mollis metus at tempor. Donec ac malesuada nibh, 
						vel tincidunt nibh. Fusce facilisis, mi in tristique elementum, sem magna. </p>
						<span class="fa fa-circle"></span>
					</div>
					<div class="exp_grid1">
						<h4>Graphic designer in x company</h4>
						<h5>2010-2013</h5>
						<p>Aliquam dignissim mollis metus at tempor. Donec ac malesuada nibh, 
						vel tincidunt nibh. Fusce facilisis, mi in tristique elementum, sem magna. </p>
						<span class="fa fa-circle"></span>
					</div>
					<div class="exp_grid1">
						<h4>web designer in x company</h4>
						<h5>2007-2009</h5>
						<p>Aliquam dignissim mollis metus at tempor. Donec ac malesuada nibh, 
						vel tincidunt nibh. Fusce facilisis, mi in tristique elementum, sem magna. </p>
						<span class="fa fa-circle"></span>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div> 
	</section>
</template>

<script>
import shindey from "./../assets/images/shindey.jpg";

export default {
  data() {
    return {
      shindeyjpg: shindey
    };
  }
};
</script>
