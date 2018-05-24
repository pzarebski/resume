<template>
<div class="skills-agileinfo" id="skills">
	<div class="container">
		<h3 class="text-center">My skills</h3>
			<div class="modal-spa">
				<div class="skills"> 					
					<skillstechnical />
					<skillshobbies />
					<div class="clearfix"> </div>	
				</div>
			</div>
		</div> 
	</div> 
</template>

<script>
import skillshobbies from './skills.hobbies.vue'
import skillstechnical from './skills.technical.vue'

export default {
	components: {
		skillshobbies,
		skillstechnical
	}
}
</script>
