<template>
    <div class="w3l-banner">
        <div class="wthree-dot">
	        <globalnav />
		    <carousel />
	    </div>
    </div>
</template>

<script>
import globalnav from './globalnav.vue'
import carousel from './carousel.vue'

export default {
    components: {
        globalnav,
        carousel
    }
}
</script>
