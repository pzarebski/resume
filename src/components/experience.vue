<template>
	<section class="experience" id="experience">
		<div class="container">
			<h3 class="text-center">Work Experience<a href="#experience"></a></h3>
			<div class="col-md-5 exp_left">
				<img :src="shindeyjpg" alt="" />
			</div>
			<div class="col-md-7 exp_right">
				<h3>My Experience</h3>
				<p>I am .NET developer which specializes in custom SharePoint On-premise and SharePoint Online/Office 365 Solutions.</p>
				<div class="exp_grids">
					<experiencepositionitem position="Senior SharePoint Consultant in Lingaro Sp. z o.o." years="2018" summary="SharePoint 2013 On-Premise audit, SharePoint Online Solutions consultancy." />
					<experiencepositionitem position="Senior SharePoint Developer in NBC Sp. z o.o." years="2017-2018" summary="Developing SharePoint On-Premise solutions, Power BI reports." />
					<experiencepositionitem position="SharePoint Developer in Seven Dots Sp. z o.o." years="2014-2017" summary="Developing SharePoint On-Premise and SharePoint Online Solutions." />
					<experiencepositionitem position=".NET developer in Seven Dots Sp. z o.o." years="2010-2013" summary="Developing desktop applications with WPF, softphone communication intefaces, MS Word plugin, ASP.NET web applications, SharePoint solutions." />
					<experiencepositionitem position=".NET developer in Experter Sp. z o.o" years="2007-2009" summary="Developing ASP.NET Forms and MVC applications." />
				</div>
			</div>
			<div class="clearfix"></div>
		</div> 
	</section>
</template>

<script>
import shindey from "./../../public/assets/images/shindey.jpg";
import experiencepositionitem from './experience.positionitem.vue'

export default {
  data() {
    return {
      shindeyjpg: shindey
    };
	},
	components: {
		experiencepositionitem
	}
};
</script>
