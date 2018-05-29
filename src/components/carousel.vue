<template>
    <div class="container">
        <div class="flexslider-info">
            <section class="slider col-md-6">
                <div class="flexslider">
                    <ul class="slides">
                        <carouselitem title="My name is " emphasis="Przemyslaw Zarebski" desc="I live in Warsaw, Poland" />
                        <carouselitem title="this is my " emphasis="website" desc="Where you can find a lot of staff about me." />
                        <carouselitem title="I'm a " emphasis="developer" desc="I am specializing in SharePoint and Office 365 projects" />
                    </ul>
                </div>
            </section>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import carouselitem from './carousel.item.vue'

export default {
    components: {
        carouselitem
    }
}
</script>
