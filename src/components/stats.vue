<template>
	<div class="stats" id="stats">
		<div class="container">
		<h3 class="text-center">Stats<a href="#stats"></a></h3>
			<div class="w3layouts_skills_grids">
				<statsitem title="Projects Done" index="1" percent="90" color="#ff4f81" />
				<statsitem title="Mobile Apps" index="2" percent="70" color="#2dde98"  />
				<statsitem title="Clients Success" index="3" percent="75" color="#00aeff"  />
				<statsitem title="Sales" index="4" percent="40" color="#ffb900"  />
				
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
</template>

<script>
import statsitem from './stats.item.vue'

export default {
	components: {
		statsitem
	}
}
</script>

