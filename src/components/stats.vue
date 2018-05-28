<template>
	<div class="stats" id="stats">
		<div class="container">
		<h3 class="text-center">Stats</h3>
			<div class="w3layouts_skills_grids">
				<statsitem title="Projects Done" index="1" />
				<statsitem title="Mobile Apps" index="2" />
				<statsitem title="Clients Success" index="3" />
				<statsitem title="Sales" index="4" />
				
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

