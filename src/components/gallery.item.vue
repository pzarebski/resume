<template>
    <div class="col-md-3 gallery-grids">
        <a :href="image" class="gallery-box" data-lightbox="example-set" data-title="">
            <img :src="image" alt="" class="img-responsive zoom-img">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        image: ""
    }
}
</script>

