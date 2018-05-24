<template>
    <!-- About section -->
    <div class="about" id="about">
        <div class="container">
            <h3 class="text-center">About Me</h3>
            
            <aboutmeinfo />
            <aboutmesummary />
            <div class="clearfix"></div>            
        </div>
    </div>
    <!-- //About section -->
</template>

<script>

import aboutmeinfo from './aboutme.info.vue'
import aboutmesummary from './aboutme.summary.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
        aboutmeinfo,
        aboutmesummary
    }
}

</script>