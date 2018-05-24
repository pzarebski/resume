<template>
    <div class="col-md-6 bar-grids bargrids-left">
        <h4> Technical Skills </h4>
        <p>Vestibulum facilisis nisi sed libero consectetur, nec eleifend augue feugiat.
        Vivamus dictum quam id diam dapibus, a vehicula orci luctus.</p>
        
        <skillstechnicalitem title="web design" :percent="0.8" />
        <skillstechnicalitem title="ui design & developer" :percent="0.7" />
        <skillstechnicalitem title="Javascript" :percent="0.9" />
        <skillstechnicalitem title="Photoshop" :percent="0.75" />
    </div>
</template>

<script>

import skillstechnicalitem from './skills.technical.item.vue'

export default {
    components: {
        skillstechnicalitem
    }
}
</script>
